"use client";

import {
  MessageMultiple01Icon,
  CheckmarkBadge01Icon,
  Timer02Icon,
  HourglassIcon,
} from "hugeicons-react";

export function AgentView() {
  const hasPendingTickets = false;

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <MessageMultiple01Icon className="size-4" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              Chats na Fila
            </span>
          </div>
          <div className="text-3xl font-semibold">3</div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <Timer02Icon className="size-4" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              TMA Hoje
            </span>
          </div>
          <div className="text-3xl font-semibold">
            04<span className="text-lg text-muted-foreground">m</span> 12
            <span className="text-lg text-muted-foreground">s</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-2 text-amber-500 mb-3">
            <HourglassIcon className="size-4" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              Aguardando Resposta
            </span>
          </div>
          <div className="text-3xl font-semibold text-foreground">5</div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md relative overflow-hidden">
          <div className="absolute -right-4 -top-4 size-24 bg-indigo-500/10 rounded-full blur-2xl" />
          <div className="flex items-center gap-2 text-indigo-500 mb-3 relative z-10">
            <CheckmarkBadge01Icon className="size-4" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              Concluídos por você
            </span>
          </div>
          <div className="text-3xl font-semibold text-foreground relative z-10">
            18
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-foreground">
            <div className="flex size-6 items-center justify-center rounded bg-indigo-500/10 text-indigo-600">
              <MessageMultiple01Icon className="size-3.5" />
            </div>
            Foco do Momento
          </h2>
        </div>

        {hasPendingTickets ? (
          <div className="space-y-2">{/* Lista real de chamados */}</div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center rounded-xl bg-muted/30 border border-dashed border-border/50">
            <div className="flex size-12 items-center justify-center rounded-full bg-background border border-border shadow-sm mb-4">
              <CheckmarkBadge01Icon className="size-6 text-indigo-500" />
            </div>
            <h3 className="text-base font-medium text-foreground">
              Sua caixa de entrada está limpa!
            </h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm leading-relaxed">
              Você zerou sua fila de hoje. Aproveite o momento para focar em
              outras tarefas, a IA cuida da triagem. ☕
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
