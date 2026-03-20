"use client";

import { usePathname } from "next/navigation";

const routeTranslations: Record<string, string> = {
  dashboard: "Home",
  inbox: "Caixa de Entrada",
  history: "Histórico Global",
  ai: "Treinamento IA (RAG)",
  metrics: "Métricas e Relatórios",
  settings: "Configurações",
};

export function HeaderTitle() {
  const pathname = usePathname();

  if (!pathname || pathname === "/dashboard") {
    return (
      <h2 className="text-sm font-semibold leading-none tracking-tight">
        Home
      </h2>
    );
  }

  if (pathname.startsWith("/chat/")) {
    const ticketId = pathname.split("/").pop();
    return (
      <h2 className="flex items-center text-sm font-medium text-muted-foreground leading-none">
        Atendimento{" "}
        <span className="text-foreground font-semibold tracking-tight ml-1.5">
          {ticketId}
        </span>
      </h2>
    );
  }

  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  const formattedTitle =
    routeTranslations[lastSegment] ||
    (lastSegment
      ? lastSegment.charAt(0).toUpperCase() +
        lastSegment.slice(1).replace(/-/g, " ")
      : "Workspace");

  return (
    <h2 className="text-sm font-semibold leading-none tracking-tight">
      {formattedTitle}
    </h2>
  );
}
