import {
  Search01Icon,
  Attachment01Icon,
  ChatBotIcon,
  FilterIcon,
  CheckmarkBadge01Icon,
  SentIcon,
} from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const activeChats = [
  {
    id: "TKT-1042",
    name: "João Silva",
    initials: "JS",
    lastMessage: "Preciso cancelar minha assinatura...",
    time: "Agora",
    unread: 2,
    status: "waiting",
    assignedTo: null,
  },
  {
    id: "TKT-1045",
    name: "Lucas Fernandes",
    initials: "LF",
    lastMessage: "Qual o valor do plano intermediário?",
    time: "10:30",
    unread: 0,
    status: "ai_handling",
    assignedTo: "IA",
  },
  {
    id: "TKT-1041",
    name: "Maria Almeida",
    initials: "MA",
    lastMessage: "Certo, vou aguardar o link.",
    time: "10:15",
    unread: 0,
    status: "active",
    assignedTo: "Você",
  },
  {
    id: "TKT-1038",
    name: "Carlos Mendes",
    initials: "CM",
    lastMessage: "Tudo certo então, obrigado!",
    time: "09:30",
    unread: 0,
    status: "active",
    assignedTo: "Ana",
  },
];

export default function InboxPage() {
  return (
    <div className="flex h-[calc(100vh-6rem)] w-full overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm">
      {/* ================= COLUNA ESQUERDA: LISTA DE CHATS GLOBAL ================= */}
      <div className="flex w-80 shrink-0 flex-col border-r border-border/50 bg-muted/10">
        {/* Header da Lista (Fixo) */}
        <div className="shrink-0 flex flex-col gap-4 border-b border-border/50 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold tracking-tight">
              Caixa de Entrada
            </h2>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <FilterIcon className="size-4" />
            </Button>
          </div>
          <div className="relative">
            <Search01Icon className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar ticket ou cliente..."
              className="pl-9 bg-background h-9 text-xs"
            />
          </div>
        </div>

        {/* Scroll Isolado da Lista de Chats */}
        <div className="flex-1 min-h-0">
          <ScrollArea className="h-full">
            <div className="flex flex-col gap-1 p-2">
              {activeChats.map((chat, index) => (
                <button
                  key={chat.id}
                  className={`flex flex-col gap-2 rounded-xl p-3 text-left transition-all hover:bg-muted ${index === 0 ? "bg-muted shadow-sm border border-border/50" : "bg-transparent border border-transparent"}`}
                >
                  <div className="flex w-full items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <Avatar className="h-9 w-9 border border-border/50">
                        <AvatarFallback
                          className={`text-xs font-medium 
                          ${
                            chat.status === "waiting"
                              ? "bg-orange-500/10 text-orange-600"
                              : chat.status === "ai_handling"
                                ? "bg-indigo-500/10 text-indigo-600"
                                : "bg-background text-muted-foreground"
                          }`}
                        >
                          {chat.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold leading-tight">
                          {chat.name}
                        </span>
                        {chat.status === "waiting" && (
                          <Badge
                            variant="outline"
                            className="mt-0.5 h-4 w-fit px-1 text-[9px] uppercase font-medium text-orange-500 border-orange-500/30"
                          >
                            Aguardando
                          </Badge>
                        )}
                        {chat.status === "ai_handling" && (
                          <Badge
                            variant="outline"
                            className="mt-0.5 h-4 w-fit px-1 text-[9px] uppercase font-medium text-indigo-500 border-indigo-500/30 flex items-center gap-1"
                          >
                            <ChatBotIcon className="size-2.5" /> Com a IA
                          </Badge>
                        )}
                        {chat.status === "active" &&
                          chat.assignedTo === "Você" && (
                            <Badge
                              variant="outline"
                              className="mt-0.5 h-4 w-fit px-1 text-[9px] uppercase font-medium text-primary bg-primary/10 border-primary/30"
                            >
                              Com Você
                            </Badge>
                          )}
                        {chat.status === "active" &&
                          chat.assignedTo !== "Você" && (
                            <Badge
                              variant="outline"
                              className="mt-0.5 h-4 w-fit px-1 text-[9px] uppercase font-medium text-muted-foreground border-border/50"
                            >
                              Com {chat.assignedTo}
                            </Badge>
                          )}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="text-xs text-muted-foreground font-medium">
                        {chat.time}
                      </span>
                      {chat.unread > 0 && (
                        <Badge className="flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px]">
                          {chat.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="w-full pl-11">
                    <span className="line-clamp-1 text-xs text-muted-foreground">
                      {chat.lastMessage}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* ================= COLUNA DIREITA: ÁREA DO CHAT ================= */}
      <div className="flex flex-1 flex-col bg-background min-w-0">
        {/* Header do Chat Ativo (Fixo) */}
        <div className="shrink-0 flex h-16 items-center justify-between border-b border-border/50 px-6 bg-muted/5">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border border-border/50">
              <AvatarFallback className="bg-orange-500/10 text-orange-600 font-medium">
                JS
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">João Silva</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                TKT-1042
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs font-medium"
            >
              Finalizar Atendimento
            </Button>
            <Button size="sm" className="h-8 text-xs font-medium">
              Assumir Ticket
            </Button>
          </div>
        </div>

        {/* Scroll Isolado das Mensagens */}
        <div className="flex-1 min-h-0">
          <ScrollArea className="h-full px-6 py-4">
            <div className="flex flex-col gap-6">
              {/* Mensagem do Cliente */}
              <div className="flex items-end gap-2 self-start max-w-[80%] mt-2">
                <Avatar className="h-8 w-8 shrink-0 border border-border/40">
                  <AvatarFallback className="bg-background text-xs">
                    JS
                  </AvatarFallback>
                </Avatar>
                <div className="rounded-2xl rounded-bl-sm border border-border/50 bg-card px-4 py-3 text-sm shadow-sm">
                  <p>
                    Olá, estou tentando cancelar a minha assinatura anual mas
                    não encontro o botão no painel. Podem me ajudar?
                  </p>
                  <span className="mt-1 block text-[10px] text-muted-foreground">
                    10:40 AM
                  </span>
                </div>
              </div>

              {/* Sussurro da IA */}
              <div className="mx-auto flex w-full max-w-[85%] flex-col gap-2 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 shadow-sm dark:bg-indigo-500/10">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <ChatBotIcon className="size-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Resonance Copilot
                  </span>
                </div>
                <p className="text-sm text-foreground/90">
                  O cliente "João Silva" possui o plano Anual Pro. De acordo com
                  a regra de negócios, ele ainda está dentro dos 7 dias de
                  garantia.
                  <br />
                  <br />
                  <span className="font-medium text-indigo-600 dark:text-indigo-400">
                    Sugestão de resposta:
                  </span>{" "}
                  Ofereça o estorno integral via painel e envie o link de
                  feedback.
                </p>
                <div className="mt-2 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs border-indigo-500/30 text-indigo-600 hover:bg-indigo-500/10 dark:text-indigo-400"
                  >
                    Usar sugestão
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs text-muted-foreground"
                  >
                    Ignorar
                  </Button>
                </div>
              </div>

              {/* Mensagem do Atendente */}
              <div className="flex flex-col gap-1 self-end max-w-[80%] mb-2">
                <div className="rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-sm text-primary-foreground shadow-sm">
                  <p>
                    Olá João! Compreendo perfeitamente. Como você está dentro
                    dos 7 dias de garantia, posso processar o estorno integral
                    para você agora mesmo.
                  </p>
                </div>
                <div className="flex items-center justify-end gap-1 px-1">
                  <span className="text-[10px] text-muted-foreground">
                    10:45 AM
                  </span>
                  <CheckmarkBadge01Icon className="size-3 text-primary" />
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>

        {/* Área de Digitação (Fixa no rodapé) */}
        <div className="shrink-0 border-t border-border/50 p-4 bg-background">
          <div className="relative flex items-end gap-2 rounded-2xl border border-border/50 bg-muted/10 p-2 shadow-sm focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all">
            <div className="flex gap-1 pb-0.5">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground"
              >
                <Attachment01Icon className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-indigo-500 hover:text-indigo-600 hover:bg-indigo-500/10"
                title="Atalho para IA (/ia)"
              >
                <ChatBotIcon className="size-4" />
              </Button>
            </div>

            <Textarea
              placeholder="Digite sua mensagem ou digite '/' para usar a IA..."
              className="min-h-[40px] max-h-[120px] flex-1 resize-none border-0 bg-transparent py-2.5 px-1 text-sm shadow-none focus-visible:ring-0"
              rows={1}
            />

            <div className="pb-0.5">
              <Button
                size="icon"
                className="h-8 w-8 shrink-0 rounded-xl transition-transform active:scale-95 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <SentIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
