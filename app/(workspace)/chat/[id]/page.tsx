import {
  Attachment01Icon,
  ChatBotIcon,
  CheckmarkBadge01Icon,
  SentIcon,
  UserCircleIcon,
  Mail01Icon,
  Calendar01Icon,
  CreditCardIcon,
  TimeQuarterIcon,
} from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function IndividualChatPage({ params }: Props) {
  const { id } = await params;

  const customer = {
    name: "João Silva",
    initials: "JS",
    email: "joao.silva@exemplo.com",
    plan: "Anual Pro",
    status: "Ativo",
    customerSince: "Fev 2024",
    tags: ["Risco de Churn", "VIP"],
  };

  return (
    <div className="flex h-[calc(100vh-6rem)] w-full gap-4 overflow-hidden">
      {/* ================= COLUNA CENTRAL: O CHAT ================= */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm min-w-0">
        {/* Header do Chat (Fixo no topo) */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border/50 px-6 bg-muted/5">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border border-border/50">
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {customer.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight">
                {customer.name}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                {id}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="h-5 px-2 text-[10px] uppercase font-medium text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
            >
              Em andamento
            </Badge>
            <Separator orientation="vertical" className="h-4" />
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs font-medium"
            >
              Transferir
            </Button>
            <Button
              size="sm"
              className="h-8 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Resolver Ticket
            </Button>
          </div>
        </div>

        {/* ======== A MÁGICA DO SCROLL ISOLADO ACONTECE AQUI ========
          O `flex-1 min-h-0` impede que as mensagens empurrem a caixa de texto pra fora da tela.
          O ScrollArea ganha `h-full` para preencher exatamente esse espaço bloqueado.
        */}
        <div className="flex-1 min-h-0">
          <ScrollArea className="h-full px-6 py-4">
            <div className="flex flex-col gap-6">
              {/* Balões de Mensagem (Mesmo código anterior) */}
              <div className="flex items-end gap-2 self-start max-w-[80%] mt-2">
                <Avatar className="h-8 w-8 shrink-0 border border-border/40">
                  <AvatarFallback className="bg-background text-xs">
                    {customer.initials}
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

              <div className="mx-auto flex w-full max-w-[85%] flex-col gap-2 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 shadow-sm dark:bg-indigo-500/10">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                  <ChatBotIcon className="size-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Resonance Copilot
                  </span>
                </div>
                <p className="text-sm text-foreground/90">
                  O cliente "{customer.name}" possui o plano {customer.plan}. De
                  acordo com a regra de negócios, ele ainda está dentro dos 7
                  dias de garantia.
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
              className="min-h-10 max-h-30 flex-1 resize-none border-0 bg-transparent py-2.5 px-1 text-sm shadow-none focus-visible:ring-0"
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

      {/* ================= COLUNA DIREITA: MINI-CRM ================= */}
      <div className="flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-border/50 bg-muted/10 shadow-sm lg:flex">
        {/* Perfil Rápido (Fixo no topo) */}
        <div className="shrink-0 flex flex-col items-center gap-3 border-b border-border/50 p-6 text-center">
          <Avatar className="h-16 w-16 border-2 border-background shadow-sm">
            <AvatarFallback className="bg-primary/10 text-primary text-xl font-medium">
              {customer.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{customer.name}</h3>
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1 mt-1">
              <Mail01Icon className="size-3" /> {customer.email}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5 mt-2">
            {customer.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] px-1.5 py-0 h-5 bg-destructive/10 text-destructive hover:bg-destructive/20 border-0"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* O Mesmo truque de scroll isolado para o CRM */}
        <div className="flex-1 min-h-0">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <UserCircleIcon className="size-4" /> Sobre o Cliente
                </h4>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <CreditCardIcon className="size-3.5" /> Plano
                    </span>
                    <span className="font-medium">{customer.plan}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar01Icon className="size-3.5" /> Cliente desde
                    </span>
                    <span className="font-medium">
                      {customer.customerSince}
                    </span>
                  </div>
                </div>
              </div>

              <Separator className="bg-border/50" />

              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <TimeQuarterIcon className="size-4" /> Histórico Recente
                </h4>
                <div className="flex flex-col gap-2">
                  <button className="flex flex-col text-left p-2 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50">
                    <span className="text-xs font-medium text-foreground">
                      Dúvida sobre API
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      Resolvido há 2 semanas
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
