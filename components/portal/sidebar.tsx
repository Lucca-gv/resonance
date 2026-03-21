"use client";

import {
  ChatBotIcon,
  PlusSignIcon,
  MessageMultiple01Icon,
  CheckmarkBadge01Icon,
  Logout01Icon,
  Settings01Icon,
} from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Ticket } from "@/core/domain/entities/ticket";

interface PortalSidebarProps {
  clientName: string;
  clientInitials: string;
  currentView: "home" | "chat";
  activeTicketTitle: string;
  activeTickets: Ticket[];
  closedTickets: Ticket[];
  onNewTicket: () => void;
  onOpenActiveTicket: (title: string) => void;
  onOpenClosedTicket: (title: string) => void;
  onOpenSettings: () => void;
  onLogout: () => void;
}

export function PortalSidebar({
  clientName,
  clientInitials,
  currentView,
  activeTicketTitle,
  activeTickets,
  closedTickets,
  onNewTicket,
  onOpenActiveTicket,
  onOpenClosedTicket,
  onOpenSettings,
  onLogout,
}: PortalSidebarProps) {
  return (
    <div className="dark hidden w-64 shrink-0 flex-col border-r border-border bg-background text-foreground md:flex">
      {/* Header */}
      <div className="flex h-16 shrink-0 items-center px-4 border-b border-border">
        <div className="flex items-center gap-2 font-bold text-foreground">
          <div className="flex size-7 items-center justify-center rounded-lg bg-indigo-500 text-white">
            <ChatBotIcon className="size-4" />
          </div>
          Resonance
        </div>
      </div>

      {/* Botão Novo Chamado */}
      <div className="p-4">
        <Button
          onClick={onNewTicket}
          className="w-full justify-start gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm h-10 border-0"
        >
          <PlusSignIcon className="size-4" />
          Novo Chamado
        </Button>
      </div>

      {/* Listas */}
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full px-3">
          <div className="mb-6">
            <h3 className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Em Andamento
            </h3>
            <div className="flex flex-col gap-1">
              {activeTickets.map((ticket) => (
                <button
                  key={ticket.id}
                  onClick={() => onOpenActiveTicket(ticket.title)}
                  className={`group flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm font-medium transition-colors ${currentView === "chat" && activeTicketTitle === ticket.title ? "bg-indigo-500/20 text-indigo-400" : "bg-muted/50 text-foreground hover:bg-muted"}`}
                >
                  <span className="truncate flex items-center gap-2">
                    <MessageMultiple01Icon className="size-4 text-indigo-400" />
                    {ticket.title}
                  </span>
                  {ticket.unread && (
                    <span className="size-2 rounded-full bg-indigo-500 shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Resolvidos
            </h3>
            <div className="flex flex-col gap-1">
              {closedTickets.map((ticket) => (
                <button
                  key={ticket.id}
                  onClick={() => onOpenClosedTicket(ticket.title)}
                  className={`group flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm transition-colors ${currentView === "chat" && activeTicketTitle === ticket.title ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                >
                  <CheckmarkBadge01Icon className="size-4 opacity-50" />
                  <span className="truncate">{ticket.title}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Rodapé */}
      <div className="shrink-0 border-t border-border p-4 flex flex-col gap-1">
        <button
          onClick={onOpenSettings}
          className="flex w-full items-center justify-between rounded-xl p-2 transition-colors text-left hover:bg-muted"
        >
          <div className="flex items-center gap-2">
            <Avatar className="size-8 rounded-lg border border-border">
              <AvatarFallback className="rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-semibold">
                {clientInitials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium leading-none">
                {clientName} Silva
              </span>
              <span className="text-[10px] text-muted-foreground mt-1">
                Configurações
              </span>
            </div>
          </div>
          <Settings01Icon className="size-4 text-muted-foreground" />
        </button>

        <button
          onClick={onLogout}
          className="flex w-full items-center gap-2 rounded-xl p-2 hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors text-left text-sm font-medium mt-1"
        >
          <Logout01Icon className="size-4" />
          <span className="text-sm">Sair do Portal</span>
        </button>
      </div>
    </div>
  );
}
