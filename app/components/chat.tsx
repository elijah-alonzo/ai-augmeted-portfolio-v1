"use client";

import { useState } from "react";

export default function Chat() {
  const [chatHistory, setChatHistory] = useState<{ sender: string; text: string }[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setError(null);
    setChatHistory(prev => [...prev, { sender: "user", text: question }]);
    setQuestion("");
    try {
      const res = await fetch("/api/rag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });
      if (!res.ok) throw new Error("Failed to get response");
      const data = await res.json();
      setChatHistory(prev => [...prev, { sender: "elijah", text: data.answer || "(No answer)" }]);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {chatHistory.length === 0 && (
          <div className="text-center text-gray-400 mt-8">Start the conversation!</div>
        )}
        {chatHistory.map((msg, i) => (
          <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow
                ${msg.sender === "user"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-br-none"
                  : "bg-slate-800 text-gray-100 rounded-bl-none"}
              `}
            >
              {msg.sender === "elijah" && <span className="font-semibold mr-1 text-blue-400">Elijah:</span>}
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow bg-slate-800 text-gray-100 rounded-bl-none opacity-70">
              <span className="font-semibold mr-1 text-blue-400">Elijah:</span>Typing...
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t border-slate-700">
        <input
          type="text"
          className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none"
          placeholder="Type your message..."
          value={question}
          onChange={e => setQuestion(e.target.value)}
          required
          autoFocus
          disabled={loading}
        />
        <button
          type="submit"
          className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 font-semibold transition disabled:opacity-50"
          disabled={loading}
        >
          Send
        </button>
      </form>
      {error && (
        <div className="mx-4 mb-4 p-3 rounded-lg bg-red-900/50 text-red-200 text-sm">{error}</div>
      )}
    </div>
  );
}
