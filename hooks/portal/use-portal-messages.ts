"use client";

import { useState } from "react";
import type { Message } from "@/core/domain/entities/message";

// Responsabilidade única: gerenciar as mensagens de um ticket aberto.
// Não sabe nada sobre navegação, settings ou autenticação.
export function usePortalMessages(clientName: string) {
  const [messages, setMessages] = useState<Message[]>([]);

  const loadMessages = (msgs: Message[]) => {
    setMessages(msgs);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  const sendMessage = (content: string, onAfterSend?: () => void) => {
    const now = new Date();

    const userMessage: Message = {
      id: Date.now().toString(),
      ticketId: "",
      role: "user",
      content,
      authorId: null,
      createdAt: now,
    };

    setMessages((prev) => [...prev, userMessage]);
    onAfterSend?.();

    // Resposta simulada da IA (substituída pela integração real na Fase 4)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        ticketId: "",
        role: "ai",
        content: `Entendido, ${clientName}. Estou analisando sua solicitação: "${content}". Um momento, por favor.`,
        authorId: null,
        createdAt: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  return {
    messages,
    loadMessages,
    clearMessages,
    sendMessage,
  };
}
