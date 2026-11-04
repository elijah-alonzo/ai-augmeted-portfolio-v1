"use client";

import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
import { SITE } from "@/config/site";
import { ChatPanel } from "./chat-panel";
import { useChatDialog } from "./chat-dialog-context";

/** Floating launcher button plus the modal that hosts the chat. */
export function ChatDialog() {
  const { isOpen, open, close } = useChatDialog();

  if (!isOpen) {
    return (
      <button
        onClick={open}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-110 z-30"
        aria-label="Open chat"
      >
        <MessageCircle size={28} />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-end p-4">
      <div className="w-full max-w-md md:max-w-lg h-[600px] md:h-[650px] bg-gradient-to-b from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl border border-blue-200 flex flex-col overflow-hidden hover:border-blue-300 transition">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-5 flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src={SITE.images.avatar}
                alt={SITE.fullName}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium text-white text-base">{SITE.name}</h3>
          </div>
          <button
            onClick={close}
            className="p-2 hover:bg-white/20 rounded-lg transition transform hover:scale-110"
            aria-label="Close chat"
          >
            <X size={24} className="text-white" />
          </button>
        </div>
        <div className="flex-1 overflow-hidden bg-gradient-to-b from-white to-blue-50">
          <ChatPanel />
        </div>
      </div>
    </div>
  );
}
