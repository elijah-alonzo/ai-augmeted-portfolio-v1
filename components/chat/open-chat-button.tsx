"use client";

import { MessageCircle } from "lucide-react";
import { useChatDialog } from "./chat-dialog-context";

export function OpenChatButton() {
  const { open } = useChatDialog();

  return (
    <button
      onClick={open}
      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2"
    >
      <MessageCircle size={20} />
      Ask My Digital Twin
    </button>
  );
}
