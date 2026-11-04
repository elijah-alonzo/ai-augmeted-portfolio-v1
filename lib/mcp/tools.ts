import { complete, MODELS } from "@/lib/llm/groq";
import { profile, searchProfile, type SearchResult } from "./profile";

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, { type: string; description: string }>;
    required?: string[];
  };
}

export interface ToolResult {
  content: { type: "text"; text: string }[];
  isError?: boolean;
}

const ownerName = profile.personal.name;

export const TOOL_DEFINITIONS: ToolDefinition[] = [
  {
    name: "ask_digital_twin",
    description: `Ask questions about ${ownerName}'s professional background, skills, projects, and experience. The AI will provide answers based on their profile information.`,
    inputSchema: {
      type: "object",
      properties: {
        question: {
          type: "string",
          description: "Your question about the digital twin's background, skills, or experience",
        },
      },
      required: ["question"],
    },
  },
  {
    name: "get_profile_summary",
    description: "Get a summary of the digital twin's personal information and key details",
    inputSchema: { type: "object", properties: {} },
  },
];

const SYSTEM_PROMPT = `You are an AI digital twin assistant representing ${ownerName}. Answer questions as if you are the person, speaking in first person about your background, skills, and experience. If the question is not directly related to the profile, still try to give a helpful response based on your background.`;

function textResult(text: string, isError = false): ToolResult {
  return { content: [{ type: "text", text }], ...(isError && { isError }) };
}

function formatSources(results: SearchResult[]): string {
  const topScore = Math.max(...results.map((result) => result.score), 1);
  return results
    .map(({ title, score }) => `- ${title} (relevance: ${((score / topScore) * 100).toFixed(0)}%)`)
    .join("\n");
}

async function askDigitalTwin(question: string): Promise<ToolResult> {
  const results = searchProfile(question);
  const context = results.map(({ title, content }) => `${title}: ${content}`).join("\n\n");

  const answer = await complete({
    model: MODELS.fast,
    system: SYSTEM_PROMPT,
    prompt: `Based on the following information, answer the question:\n\n${context}\n\nQuestion: ${question}`,
    maxTokens: 1024,
  });

  return textResult(`${answer}\n\n**Sources:**\n${formatSources(results)}`);
}

function getProfileSummary(): ToolResult {
  const { name, title, location, contact } = profile.personal;

  return textResult(
    [
      "**Digital Twin Profile Summary**",
      "",
      `**Name:** ${name}`,
      `**Title:** ${title}`,
      `**Location:** ${location}`,
      `**Email:** ${contact?.email}`,
      `**LinkedIn:** ${contact?.linkedin}`,
      `**GitHub:** ${contact?.github}`,
      "",
      "This digital twin can answer questions about:",
      "- Professional background and experience",
      "- Technical skills and certifications",
      "- Education and coursework",
      "- Projects and portfolio work",
      "- Career goals and interests",
      "- Interview preparation insights",
    ].join("\n"),
  );
}

export async function callTool(name: string, args: Record<string, unknown> = {}): Promise<ToolResult> {
  try {
    switch (name) {
      case "ask_digital_twin": {
        const question = typeof args.question === "string" ? args.question.trim() : "";
        if (!question) return textResult("Error: `question` must be a non-empty string.", true);
        return await askDigitalTwin(question);
      }
      case "get_profile_summary":
        return getProfileSummary();
      default:
        return textResult(`Unknown tool: ${name}`, true);
    }
  } catch (error) {
    return textResult(`Error: ${error instanceof Error ? error.message : "Unknown error"}`, true);
  }
}
