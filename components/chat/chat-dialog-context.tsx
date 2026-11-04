"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface ChatDialogState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ChatDialogContext = createContext<ChatDialogState | null>(null);

export function ChatDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<ChatDialogState>(
    () => ({ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }),
    [isOpen],
  );

  return <ChatDialogContext.Provider value={value}>{children}</ChatDialogContext.Provider>;
}

export function useChatDialog() {
  const context = useContext(ChatDialogContext);
  if (!context) throw new Error("useChatDialog must be used within a ChatDialogProvider");
  return context;
}
