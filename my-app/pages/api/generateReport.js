import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { dataDescription, analysisGoal } = req.body;

    if (!dataDescription || !analysisGoal) {
      return res.status(400).json({
        error: "Missing dataDescription or analysisGoal",
      });
    }

    // Init Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Prompt scientifique
    const prompt = `
You are a senior data scientist.

DATA DESCRIPTION:
${dataDescription}

ANALYSIS GOAL:
${analysisGoal}

TASK:
Generate a structured scientific data analysis report with the following sections:

1. Introduction
2. Dataset Description
3. Methodology
4. Statistical Analysis
5. Key Insights
6. Conclusion
7. Recommendations

Use a formal academic tone.
`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return res.status(200).json({ report: response });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Failed to generate report",
    });
  }
}
