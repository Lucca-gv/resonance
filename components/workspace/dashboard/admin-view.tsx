"use client";

import { useAdminOnboarding } from "@/hooks/workspace/use-admin-onboarding";

import {
  MessageMultiple01Icon,
  Timer02Icon,
  Brain01Icon,
  ChartHistogramIcon,
} from "hugeicons-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Seg", tma: 5, iaResolved: 80, queued: 12 },
  { name: "Ter", tma: 4.5, iaResolved: 85, queued: 19 },
  { name: "Qua", tma: 4, iaResolved: 88, queued: 8 },
  { name: "Qui", tma: 6, iaResolved: 75, queued: 25 },
  { name: "Sex", tma: 3.5, iaResolved: 92, queued: 5 },
  { name: "Sáb", tma: 3, iaResolved: 95, queued: 2 },
  { name: "Dom", tma: 2.5, iaResolved: 96, queued: 1 },
];

export function AdminView() {
  useAdminOnboarding(true);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        id="tour-admin-kpis"
      >
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <MessageMultiple01Icon className="size-4" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              Chats na Fila (Global)
            </span>
          </div>
          <div className="text-3xl font-semibold">42</div>
          <p className="text-xs text-muted-foreground mt-2">
            +12% comparado a ontem
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <Timer02Icon className="size-4" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              TMA Global
            </span>
          </div>
          <div className="text-3xl font-semibold">
            05<span className="text-lg text-muted-foreground">m</span> 30
            <span className="text-lg text-muted-foreground">s</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            -45s de melhoria na semana
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm relative overflow-hidden">
          <div className="absolute -right-4 -top-4 size-24 bg-indigo-500/10 rounded-full blur-2xl" />
          <div className="flex items-center gap-2 text-indigo-500 mb-3 relative z-10">
            <Brain01Icon className="size-4" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              Resolução Autônoma (IA)
            </span>
          </div>
          <div className="flex items-baseline gap-2 relative z-10">
            <div className="text-3xl font-semibold text-foreground">88%</div>
            <div className="text-sm font-medium text-indigo-500">
              vs 12% Humano
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-foreground">
            <div className="flex size-6 items-center justify-center rounded bg-indigo-500/10 text-indigo-600">
              <ChartHistogramIcon className="size-3.5" />
            </div>
            Desempenho da Operação (7 Dias)
          </h2>
        </div>

        <div className="h-87.5 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="var(--border)"
                opacity={0.5}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
                dy={10}
              />
              <YAxis
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--card)",
                }}
                itemStyle={{ fontSize: "13px", fontWeight: 500 }}
                labelStyle={{
                  color: "var(--muted-foreground)",
                  marginBottom: "4px",
                }}
              />

              <Legend
                wrapperStyle={{ paddingTop: "20px", fontSize: "13px" }}
                iconType="circle"
              />

              <Line
                yAxisId="left"
                type="monotone"
                dataKey="queued"
                name="Chats na Fila"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="iaResolved"
                name="Taxa de Resolução IA (%)"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="tma"
                name="TMA (Minutos)"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
