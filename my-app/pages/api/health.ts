import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  status: string;
  message: string;
  apiKey?: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const apiKeyExists = !!process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== "your_openai_api_key_here";
  
  res.status(200).json({
    status: "OK",
    message: "API is running correctly",
    apiKey: apiKeyExists,
  });
}
