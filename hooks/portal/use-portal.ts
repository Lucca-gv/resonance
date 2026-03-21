"use client";

import { useState } from "react";
import type { Message } from "@/core/domain/entities/message";
import type { Ticket, TicketStatus } from "@/core/domain/entities/ticket";

type PortalView = "home" | "chat";

const ACTIVE_TICKETS: Ticket[] = [
  { id: "TKT-1042", title: "Dúvida sobre cobrança", unread: true },
];

const CLOSED_TICKETS: Ticket[] = [
  { id: "TKT-0988", title: "Acesso negado na API" },
  { id: "TKT-0812", title: "Como mudar de plano?" },
];

export function usePortal(clientName: string) {
  const [currentView, setCurrentView] = useState<PortalView>("home");
  const [ticketStatus, setTicketStatus] = useState<TicketStatus>("open");
  const [activeTicketTitle, setActiveTicketTitle] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleNewTicket = () => {
    setCurrentView("home");
    setTicketStatus("open");
    setMessages([]);
    setActiveTicketTitle("");
  };

  const handleOpenActiveTicket = (title: string) => {
    setCurrentView("chat");
    setTicketStatus("open");
    setActiveTicketTitle(title);
    setMessages([
      {
        id: "1",
        role: "user",
        content: "Preciso de ajuda com a cobrança que veio duplicada.",
        time: "09:40",
      },
      {
        id: "2",
        role: "ai",
        content: `Olá, ${clientName}! Vi aqui que ocorreu uma duplicidade no sistema. Já estou transferindo para um humano resolver o estorno.`,
        time: "09:41",
      },
    ]);
  };

  const handleOpenClosedTicket = (title: string) => {
    setCurrentView("chat");
    setTicketStatus("closed");
    setActiveTicketTitle(title);
    setMessages([
      {
        id: "1",
        role: "user",
        content: "Não consigo acessar a API, dá erro 403.",
        time: "Segunda-feira",
      },
      {
        id: "2",
        role: "ai",
        content:
          "Identificamos que sua chave de API estava expirada. Acabamos de gerar uma nova no seu painel. Pode testar?",
        time: "Segunda-feira",
      },
      {
        id: "3",
        role: "user",
        content: "Tudo certo agora, obrigado!",
        time: "Segunda-feira",
      },
      {
        id: "4",
        role: "system",
        content: "Chamado encerrado pelo suporte.",
        time: "Terça-feira",
      },
    ]);
  };

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setCurrentView("chat");

    if (!activeTicketTitle) setActiveTicketTitle("Novo Atendimento");

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: `Entendido, ${clientName}. Estou analisando sua solicitação: "${content}". Um momento, por favor.`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  const handleLogout = () => {
    window.location.href = "/portal/login";
  };

  return {
    currentView,
    ticketStatus,
    activeTicketTitle,
    isSettingsOpen,
    setIsSettingsOpen,
    messages,
    activeTickets: ACTIVE_TICKETS,
    closedTickets: CLOSED_TICKETS,
    handleNewTicket,
    handleOpenActiveTicket,
    handleOpenClosedTicket,
    handleSendMessage,
    handleLogout,
  };
}
