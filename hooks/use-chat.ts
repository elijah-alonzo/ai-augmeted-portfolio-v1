"use client";

import { useState, type FormEvent } from "react";
import { askDigitalTwin } from "@/lib/chat-client";
import type { ChatMessage } from "@/types/chat";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(event: FormEvent) {
    event.preventDefault();
    const text = question.trim();
    if (!text) return;

    setIsLoading(true);
    setError(null);
    setMessages((prev) => [...prev, { role: "user", text }]);
    setQuestion("");

    try {
      const answer = await askDigitalTwin(text);
      setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return { messages, question, setQuestion, isLoading, error, submit };
}
