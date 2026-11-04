import { complete, MODELS } from "@/lib/llm/groq";
import { retrieveContext } from "./retriever";

const SYSTEM_PROMPT =
  "You are an AI digital twin. Answer questions as if you are the person, using first person. Be concise and answer only what is asked, without extra information.";

function buildPrompt(question: string, context: string): string {
  return `Answer only the following question about yourself, using first person. Be formal, warm, concise, and direct.\n\nYour Information:\n${context}\n\nQuestion: ${question}`;
}

/** Answers a visitor's question as the digital twin, grounded in retrieved profile data. */
export async function answerQuestion(question: string): Promise<string> {
  const context = await retrieveContext(question);

  const answer = await complete({
    model: MODELS.quality,
    system: SYSTEM_PROMPT,
    prompt: buildPrompt(question, context),
    temperature: 0.7,
    maxTokens: 500,
  });

  return answer || "No answer generated.";
}
