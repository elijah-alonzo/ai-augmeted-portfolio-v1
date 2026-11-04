"use client";

import Image from "next/image";
import { SITE } from "@/config/site";
import { useChat } from "@/hooks/use-chat";
import type { ChatMessage } from "@/types/chat";

function Avatar({ className }: { className: string }) {
  return <Image src={SITE.images.avatar} alt={SITE.assistantName} width={48} height={48} className={className} />;
}

function EmptyState() {
  return (
    <div className="text-center text-gray-500 mt-8">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 mx-auto flex items-center justify-center mb-3">
        <Avatar className="w-12 h-12 rounded-full object-cover" />
      </div>
      <p className="text-sm">
        Hi! I&apos;m {SITE.assistantName}&apos;s digital twin. Ask me anything about his background, skills, or
        experience!
      </p>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} items-end gap-2`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 mb-1">
          <Avatar className="w-6 h-6 rounded-full object-cover" />
        </div>
      )}
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-lg ${
          isUser
            ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-br-md"
            : "bg-white border border-blue-200 text-gray-800 rounded-bl-md"
        }`}
      >
        {!isUser && <span className="font-semibold text-blue-600 block mb-1">{SITE.assistantName}</span>}
        <div className="leading-relaxed">{message.text}</div>
      </div>
    </div>
  );
}

function TypingIndicator() {
  const delays = ["0s", "0.1s", "0.2s"];

  return (
    <div className="flex justify-start items-end gap-2">
      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mb-1">
        <Avatar className="w-6 h-6 rounded-full object-cover" />
      </div>
      <div className="max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow-lg bg-white border border-blue-200 text-gray-800 rounded-bl-md">
        <span className="font-semibold text-blue-600 block mb-1">{SITE.assistantName}</span>
        <div className="flex items-center gap-1">
          <span>Thinking</span>
          <div className="flex gap-1">
            {delays.map((delay) => (
              <div
                key={delay}
                className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: delay }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatPanel() {
  const { messages, question, setQuestion, isLoading, error, submit } = useChat();

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" role="log" aria-live="polite">
        {messages.length === 0 && <EmptyState />}
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
        {isLoading && <TypingIndicator />}
      </div>

      <div className="p-4 border-t border-blue-200 bg-gradient-to-r from-blue-50 to-white">
        <form onSubmit={submit} className="flex gap-3">
          <input
            type="text"
            className="flex-1 rounded-lg border border-blue-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            placeholder="Ask me anything..."
            aria-label="Your question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            required
            autoFocus
            disabled={isLoading}
          />
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 font-semibold transition transform hover:scale-105 disabled:opacity-50 disabled:transform-none shadow-lg"
            disabled={isLoading}
          >
            Send
          </button>
        </form>
        {error && (
          <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
            <span className="font-medium">Error:</span> {error}
          </div>
        )}
      </div>
    </div>
  );
}
