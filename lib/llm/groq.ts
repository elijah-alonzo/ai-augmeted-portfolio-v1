import Groq from "groq-sdk";
import { requireEnv } from "@/lib/env";

export const MODELS = {
  /** Higher quality, used for the website chatbot. */
  quality: "llama-3.3-70b-versatile",
  /** Faster and cheaper, used for MCP tool calls. */
  fast: "llama-3.1-8b-instant",
} as const;

let client: Groq | undefined;

function getClient(): Groq {
  client ??= new Groq({ apiKey: requireEnv("GROQ_API_KEY") });
  return client;
}

interface CompletionOptions {
  model: string;
  system: string;
  prompt: string;
  temperature?: number;
  maxTokens: number;
}

export async function complete({ model, system, prompt, temperature, maxTokens }: CompletionOptions) {
  const completion = await getClient().chat.completions.create({
    model,
    temperature,
    max_tokens: maxTokens,
    messages: [
      { role: "system", content: system },
      { role: "user", content: prompt },
    ],
  });

  return completion.choices[0]?.message?.content?.trim() ?? "";
}
