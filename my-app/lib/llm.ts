import OpenAI from "openai";

// Generates a mock analysis for demonstration
function generateMockAnalysis(fileContent: string): string {
  const lines = fileContent.split('\n').length;
  const words = fileContent.split(/\s+/).length;
  const chars = fileContent.length;
  
  return `## 📊 Analysis Report - Demo Mode

### 📈 File Statistics
- **Number of lines**: ${lines}
- **Number of words**: ${words}
- **Number of characters**: ${chars}

### 📋 Content Summary
The analyzed file contains ${lines} lines of text with approximately ${words} words.

### 🔍 Key Observations
- Text density: ${(words / lines).toFixed(2)} words per line
- Average word length: ${(chars / words).toFixed(2)} characters
- Content represents a ${chars > 1000 ? 'large' : 'moderate'} volume of data

### 💡 Recommendations
To enable full AI analysis with OpenAI GPT-4:
1. Get an API key: https://platform.openai.com/account/api-keys
2. Configure \`OPENAI_API_KEY\` in the \`.env.local\` file
3. Restart the server (\`npm run dev\`)

### ✨ Available Features
- ✅ File upload
- ✅ Report display
- ✅ Text export
- ✅ Clipboard copy
- ⏳ AI Analysis (Pending valid API key)

**Mode**: Demo | **Date**: ${new Date().toLocaleString('en-US')}`;
}

const apiKey = process.env.OPENAI_API_KEY;
const isValidApiKey = apiKey?.startsWith('sk-') && apiKey?.length > 20;

const client = isValidApiKey 
  ? new OpenAI({ apiKey })
  : null;

export async function callLLM(fileContent: string): Promise<string> {
  // If no valid API key, use demo mode
  if (!client || !isValidApiKey) {
    console.log("⚠️  OpenAI API key not configured. Demo mode activated.");
    // Simulate delay for UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    return generateMockAnalysis(fileContent);
  }

  const prompt = `
You are a professional data analysis assistant.
Analyze this file and generate a clear, structured, and actionable Markdown report.
Include statistics, key observations, and recommendations.

File to analyze:
${fileContent}
  `;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 2000,
      temperature: 0.7,
    });

    return response.choices[0].message?.content || "Analyse non disponible";
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    // Fallback in case of API error
    return generateMockAnalysis(fileContent);
  }
}