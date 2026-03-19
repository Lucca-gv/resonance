import {
  ChatBotIcon,
  UserGroupIcon,
  CheckmarkBadge01Icon,
  Clock01Icon,
  ArrowRight01Icon,
} from "hugeicons-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-8 max-w-7xl mx-auto w-full">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Card: Fila */}
        <div className="flex flex-col justify-between rounded-xl bg-card border border-border/40 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Chats na Fila
            </p>
            <div className="flex size-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
              <Clock01Icon className="size-4" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <h2 className="text-3xl font-semibold tracking-tight">12</h2>
            <span className="text-xs text-muted-foreground">
              aguardando humano
            </span>
          </div>
        </div>

        {/* Card: Atendimentos Hoje */}
        <div className="flex flex-col justify-between rounded-xl bg-card border border-border/40 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Atendimentos Hoje
            </p>
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <UserGroupIcon className="size-4" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <h2 className="text-3xl font-semibold tracking-tight">48</h2>
            <span className="text-xs text-muted-foreground">+12% vs ontem</span>
          </div>
        </div>

        {/* Card: Gráfico de Resolução IA */}
        <div className="flex flex-col justify-between rounded-xl bg-card border border-border/40 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Performance da IA
            </p>
            <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
              <CheckmarkBadge01Icon className="size-4" />
            </div>
          </div>

          <div className="space-y-3">
            {/* A Barra de Progresso Dividida */}
            <div className="flex h-2 w-full overflow-hidden rounded-full">
              <div
                className="bg-emerald-500 w-[76%]"
                title="Resolvidos pela IA (76%)"
              />
              <div
                className="bg-primary/20 w-[24%]"
                title="Direcionados (24%)"
              />
            </div>

            {/* Legenda */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <div className="size-2 rounded-full bg-emerald-500" />
                <span className="font-medium">Resolvidos (76%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="size-2 rounded-full bg-primary/20" />
                <span className="text-muted-foreground">
                  Direcionados (24%)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Caixa de Entrada</h3>
            <p className="text-sm text-muted-foreground">
              Clientes aguardando atendimento ou em andamento.
            </p>
          </div>
          <Button variant="outline" size="sm" className="h-8">
            Ver histórico completo
          </Button>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="group flex cursor-pointer flex-col gap-3 rounded-xl border border-border/40 bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 font-semibold text-xs">
                  JS
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">João Silva</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Handoff solicitado
                  </p>
                </div>
              </div>
              <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-2 py-1 rounded-md">
                04:20 min
              </span>
            </div>
            <div className="rounded-md bg-muted/50 p-2.5 text-xs text-muted-foreground line-clamp-2">
              <span className="font-medium text-foreground">IA:</span> Cliente
              solicitou falar com um atendente sobre o cancelamento da
              assinatura anual...
            </div>
            <div className="mt-1 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Assumir atendimento <ArrowRight01Icon className="ml-1 size-3" />
            </div>
          </div>

          <div className="group flex cursor-pointer flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 transition-all hover:border-primary/50 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-xs">
                  MA
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Maria Almeida
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Em atendimento
                  </p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Agora</span>
            </div>
            <div className="rounded-md bg-background/50 p-2.5 text-xs text-muted-foreground line-clamp-2 border border-border/40">
              <span className="font-medium text-foreground">Você:</span> Certo
              Maria, já estou verificando o estorno da sua fatura, um momento...
            </div>
            <div className="mt-1 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Continuar <ArrowRight01Icon className="ml-1 size-3" />
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-border/40 bg-card p-4 opacity-75 grayscale-[0.2]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <ChatBotIcon className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Cliente Anonimo
                  </p>
                  <p className="text-xs text-emerald-500 mt-1">
                    Sendo atendido pela IA
                  </p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">01:15 min</span>
            </div>
            <div className="rounded-md bg-muted/50 p-2.5 text-xs text-muted-foreground line-clamp-2">
              <span className="font-medium text-foreground">Cliente:</span> Qual
              é o valor do plano intermediário?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
