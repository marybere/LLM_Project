import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import path from "path";
import { callLLM } from "@/lib/llm";

export const config = {
  api: { bodyParser: false },
};

type ResponseData = {
  result?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const form = formidable({
    multiples: false,
    uploadDir: path.join(process.cwd(), "tmp"),
    keepExtensions: true,
  });

  // Create tmp directory if it doesn't exist
  const tmpDir = path.join(process.cwd(), "tmp");
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }

  return new Promise<void>((resolve) => {
    form.parse(req, async (err: any, fields: any, files: any) => {
      if (err) {
        console.error("Parse error:", err);
        res.status(500).json({ error: "Erreur lors de la lecture du fichier" });
        resolve();
        return;
      }

      try {
        const fileArray = Array.isArray(files.file) ? files.file[0] : files.file;
        
        if (!fileArray || !fileArray.filepath) {
          res.status(400).json({ error: "Aucun fichier fourni" });
          resolve();
          return;
        }

        const filePath = fileArray.filepath;
        
        // Read file content
        let fileContent = "";
        try {
          fileContent = fs.readFileSync(filePath, "utf-8");
        } catch (readErr) {
          // Try reading as binary and convert
          const buffer = fs.readFileSync(filePath);
          fileContent = buffer.toString("utf-8");
        }

        if (!fileContent.trim()) {
          res.status(400).json({ error: "Le fichier est vide" });
          resolve();
          return;
        }

        // Limit content size to prevent API overload
        const limitedContent = fileContent.substring(0, 10000);
        
        // Call LLM
        const analysis = await callLLM(limitedContent);

        // Clean up temp file
        try {
          fs.unlinkSync(filePath);
        } catch (e) {
          console.error("Error cleaning temp file:", e);
        }

        res.status(200).json({ result: analysis });
        resolve();
      } catch (error) {
        console.error("Erreur analyse:", error);
        res.status(500).json({ 
          error: error instanceof Error ? error.message : "Erreur lors de l'analyse" 
        });
        resolve();
      }
    });
  });
}