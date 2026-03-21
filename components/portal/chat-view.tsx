"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChatBotIcon,
  MessageMultiple01Icon,
  SentIcon,
  Attachment01Icon,
  Clock01Icon,
} from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import type { Message } from "@/core/domain/entities/message";
import type { TicketStatus } from "@/core/domain/entities/ticket";

export type { Message };

interface ChatViewProps {
  currentView: "home" | "chat";
  ticketStatus: TicketStatus;
  activeTicketTitle: string;
  clientName: string;
  clientInitials: string;
  messages: Message[];
  onSendMessage: (content: string) => void;
  onNewTicket: () => void;
}

export function ChatView({
  currentView,
  ticketStatus,
  activeTicketTitle,
  clientName,
  clientInitials,
  messages,
  onSendMessage,
  onNewTicket,
}: ChatViewProps) {
  // O estado do input agora vive SÓ aqui dentro
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current && currentView === "chat") {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, currentView]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    onSendMessage(inputValue);
    setInputValue("");
  };

  return (
    <div className="flex flex-1 flex-col items-center relative transition-colors duration-300">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {currentView === "chat" && (
        <div className="absolute top-0 left-0 w-full h-16 border-b border-border/50 bg-background/80 backdrop-blur-md z-40 flex items-center px-6">
          <h2 className="text-sm font-semibold flex items-center gap-2">
            {ticketStatus === "closed" ? (
              <Clock01Icon className="size-4 text-muted-foreground" />
            ) : (
              <MessageMultiple01Icon className="size-4 text-indigo-500" />
            )}
            {activeTicketTitle}
          </h2>
        </div>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-indigo-500/5 via-background to-background pointer-events-none" />

      <div className="flex flex-1 flex-col w-full max-w-3xl z-10 px-4">
        <div className="flex-1 min-h-0 flex flex-col justify-end pb-4 pt-20">
          <ScrollArea className="h-full w-full">
            {/* HOME VIEW */}
            {currentView === "home" && (
              <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 shadow-sm">
                  <ChatBotIcon className="size-8" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                    Olá, {clientName}! Como posso te ajudar hoje?
                  </h1>
                  <p className="text-muted-foreground">
                    Descreva seu problema ou dúvida. Nossa IA fará a triagem e,
                    se necessário, <br className="hidden sm:block" />
                    um de nossos especialistas assumirá o atendimento
                    imediatamente.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 w-full max-w-lg">
                  <button
                    onClick={() =>
                      setInputValue(
                        "Dúvida Financeira sobre a minha última fatura.",
                      )
                    }
                    className="flex flex-col items-start gap-1 p-4 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors text-left shadow-sm"
                  >
                    <span className="text-sm font-medium text-foreground">
                      Dúvida Financeira
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Faturas, planos ou cobranças
                    </span>
                  </button>
                  <button
                    onClick={() =>
                      setInputValue(
                        "Suporte Técnico: O sistema está apresentando lentidão.",
                      )
                    }
                    className="flex flex-col items-start gap-1 p-4 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors text-left shadow-sm"
                  >
                    <span className="text-sm font-medium text-foreground">
                      Suporte Técnico
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Bugs, integrações ou falhas
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* CHAT VIEW */}
            {currentView === "chat" && (
              <div className="flex flex-col gap-6 px-4 py-6 animate-in fade-in duration-500">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"} max-w-[85%] ${msg.role === "user" ? "self-end" : "self-start"}`}
                  >
                    {msg.role === "system" ? (
                      <div className="w-full flex justify-center py-4">
                        <span className="text-[10px] uppercase font-semibold tracking-widest text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {msg.content}
                        </span>
                      </div>
                    ) : (
                      <div className="flex gap-2 items-end">
                        {msg.role === "ai" && (
                          <Avatar className="size-8 shrink-0 border border-border/40">
                            <AvatarFallback className="bg-indigo-500/10 text-indigo-600">
                              <ChatBotIcon className="size-4" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`rounded-2xl px-4 py-3 text-sm shadow-sm ${
                            msg.role === "user"
                              ? "bg-indigo-600 text-white rounded-br-sm"
                              : "bg-card border border-border/50 text-foreground rounded-bl-sm"
                          }`}
                        >
                          <p>{msg.content}</p>
                          <span
                            className={`block text-[10px] mt-1 text-right ${msg.role === "user" ? "text-indigo-200" : "text-muted-foreground"}`}
                          >
                            {msg.time}
                          </span>
                        </div>
                        {msg.role === "user" && (
                          <Avatar className="size-8 shrink-0 border border-border/40">
                            <AvatarFallback className="bg-muted text-xs font-semibold">
                              {clientInitials}
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={scrollRef} />
              </div>
            )}
          </ScrollArea>
        </div>

        {/* INPUT OU BLOQUEIO */}
        <div className="shrink-0 pb-8 pt-2">
          {ticketStatus === "closed" ? (
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl border border-dashed border-border bg-muted/30">
              <Clock01Icon className="size-5 text-muted-foreground mb-2" />
              <p className="text-sm font-medium text-foreground">
                Este chamado foi encerrado
              </p>
              <p className="text-xs text-muted-foreground text-center">
                O histórico acima está disponível apenas para leitura. Se
                precisar de mais ajuda, abra um novo chamado.
              </p>
              <Button
                onClick={onNewTicket}
                size="sm"
                className="mt-4 bg-foreground text-background hover:bg-foreground/90 rounded-full h-8 px-4 text-xs"
              >
                Criar Novo Chamado
              </Button>
            </div>
          ) : (
            <div className="relative flex items-end gap-2 rounded-2xl border border-border/50 bg-muted/10 p-2 shadow-sm focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/20 transition-all">
              <div className="flex gap-1 pb-0.5">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground"
                >
                  <Attachment01Icon className="size-4" />
                </Button>
              </div>

              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Digite sua mensagem e pressione Enter..."
                className="min-h-10 max-h-30 flex-1 resize-none border-0 bg-transparent py-2.5 px-1 text-sm shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/70"
                rows={1}
              />

              <div className="pb-0.5">
                <Button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-xl transition-transform active:scale-95 bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm disabled:opacity-50 disabled:active:scale-100"
                >
                  <SentIcon className="size-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
