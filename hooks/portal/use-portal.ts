"use client";

import { useState } from "react";
import { usePortalNavigation } from "./use-portal-navigation";
import { usePortalMessages } from "./use-portal-messages";
import type { Ticket } from "@/core/domain/entities/ticket";
import type { Message } from "@/core/domain/entities/message";

// Dados mockados — serão substituídos por chamadas ao repositório na Fase 2
const ACTIVE_TICKETS: Ticket[] = [
  {
    id: "TKT-1042",
    title: "Dúvida sobre cobrança",
    status: "open",
    priority: "medium",
    channel: "portal",
    clientId: "client-1",
    assigneeId: null,
    unread: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    closedAt: null,
  },
];

const CLOSED_TICKETS: Ticket[] = [
  {
    id: "TKT-0988",
    title: "Acesso negado na API",
    status: "closed",
    priority: "high",
    channel: "portal",
    clientId: "client-1",
    assigneeId: null,
    createdAt: new Date(Date.now() - 86400000 * 2),
    updatedAt: new Date(Date.now() - 86400000),
    closedAt: new Date(Date.now() - 86400000),
  },
  {
    id: "TKT-0812",
    title: "Como mudar de plano?",
    status: "closed",
    priority: "low",
    channel: "portal",
    clientId: "client-1",
    assigneeId: null,
    createdAt: new Date(Date.now() - 86400000 * 5),
    updatedAt: new Date(Date.now() - 86400000 * 4),
    closedAt: new Date(Date.now() - 86400000 * 4),
  },
];

// Histórico mockado de um ticket aberto
const ACTIVE_TICKET_MESSAGES: Message[] = [
  {
    id: "1",
    ticketId: "TKT-1042",
    role: "user",
    content: "Preciso de ajuda com a cobrança que veio duplicada.",
    authorId: "client-1",
    createdAt: new Date(Date.now() - 3600000),
  },
  {
    id: "2",
    ticketId: "TKT-1042",
    role: "ai",
    content:
      "Olá! Vi aqui que ocorreu uma duplicidade no sistema. Já estou transferindo para um humano resolver o estorno.",
    authorId: null,
    createdAt: new Date(Date.now() - 3540000),
  },
];

// Histórico mockado de um ticket fechado
const CLOSED_TICKET_MESSAGES: Message[] = [
  {
    id: "1",
    ticketId: "TKT-0988",
    role: "user",
    content: "Não consigo acessar a API, dá erro 403.",
    authorId: "client-1",
    createdAt: new Date(Date.now() - 86400000 * 2),
  },
  {
    id: "2",
    ticketId: "TKT-0988",
    role: "ai",
    content:
      "Identificamos que sua chave de API estava expirada. Acabamos de gerar uma nova no seu painel. Pode testar?",
    authorId: null,
    createdAt: new Date(Date.now() - 86400000 * 2 + 60000),
  },
  {
    id: "3",
    ticketId: "TKT-0988",
    role: "user",
    content: "Tudo certo agora, obrigado!",
    authorId: "client-1",
    createdAt: new Date(Date.now() - 86400000),
  },
  {
    id: "4",
    ticketId: "TKT-0988",
    role: "system",
    content: "Chamado encerrado pelo suporte.",
    authorId: null,
    createdAt: new Date(Date.now() - 86400000 + 3600000),
  },
];

// Responsabilidade deste hook: orquestrar os hooks especializados
// e expor uma API única para a página do portal.
// Não contém lógica de negócio — apenas composição.
export function usePortal(clientName: string) {
  const navigation = usePortalNavigation();
  const messaging = usePortalMessages(clientName);

  // Settings pertence ao portal mas é simples o suficiente para ficar aqui
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleNewTicket = () => {
    navigation.goToHome();
    messaging.clearMessages();
  };

  const handleOpenActiveTicket = (title: string) => {
    navigation.goToChat(title, "open");
    messaging.loadMessages(ACTIVE_TICKET_MESSAGES);
  };

  const handleOpenClosedTicket = (title: string) => {
    navigation.goToChat(title, "closed");
    messaging.loadMessages(CLOSED_TICKET_MESSAGES);
  };

  const handleSendMessage = (content: string) => {
    if (!navigation.activeTicketTitle) {
      navigation.goToChat("Novo Atendimento", "open");
    }
    messaging.sendMessage(content);
  };

  const handleLogout = () => {
    window.location.href = "/portal/login";
  };

  return {
    // Estado de navegação
    currentView: navigation.currentView,
    ticketStatus: navigation.ticketStatus,
    activeTicketTitle: navigation.activeTicketTitle,

    // Estado de mensagens
    messages: messaging.messages,

    // Estado de UI
    isSettingsOpen,
    setIsSettingsOpen,

    // Dados de tickets
    activeTickets: ACTIVE_TICKETS,
    closedTickets: CLOSED_TICKETS,

    // Handlers
    handleNewTicket,
    handleOpenActiveTicket,
    handleOpenClosedTicket,
    handleSendMessage,
    handleLogout,
  };
}
