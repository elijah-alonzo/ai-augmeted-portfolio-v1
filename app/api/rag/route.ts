import { NextRequest, NextResponse } from "next/server";
import { answerQuestion } from "@/lib/rag/answer";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const question = typeof body?.question === "string" ? body.question.trim() : "";

  if (!question) {
    return NextResponse.json({ error: "A non-empty `question` is required." }, { status: 400 });
  }

  try {
    const answer = await answerQuestion(question);
    return NextResponse.json({ answer });
  } catch (error) {
    console.error("RAG request failed:", error);
    return NextResponse.json({ error: "Error processing request." }, { status: 500 });
  }
}
