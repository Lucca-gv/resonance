"use client";

import { useState } from "react";
import type { TicketStatus } from "@/core/domain/entities/ticket";

// Responsabilidade única: saber ONDE o usuário está no portal
// e qual ticket está sendo visualizado no momento.
export type PortalView = "home" | "chat";

export function usePortalNavigation() {
  const [currentView, setCurrentView] = useState<PortalView>("home");
  const [ticketStatus, setTicketStatus] = useState<TicketStatus>("open");
  const [activeTicketTitle, setActiveTicketTitle] = useState("");

  const goToChat = (title: string, status: TicketStatus) => {
    setCurrentView("chat");
    setTicketStatus(status);
    setActiveTicketTitle(title);
  };

  const goToHome = () => {
    setCurrentView("home");
    setTicketStatus("open");
    setActiveTicketTitle("");
  };

  return {
    currentView,
    ticketStatus,
    activeTicketTitle,
    goToChat,
    goToHome,
  };
}
