import { Suspense } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatedGreeting } from "@/components/workspace/animated-greeting";
import { AgentView } from "@/components/workspace/dashboard/agent-view";
import { AdminView } from "@/components/workspace/dashboard/admin-view";

// MOCK: Futuramente isso virá do Supabase auth.getUser()
const currentUser = {
  name: "Lucas",
  role: "admin", // Altere para "agent" para testar a outra tela!
  isReturning: false,
};

export default async function DashboardPage() {
  return (
    <div className="flex h-full flex-col bg-background overflow-hidden">
      <div className="px-8 pt-1 pb-6 shrink-0 border-b border-border/40 bg-background/50 backdrop-blur-md z-10">
        <AnimatedGreeting
          name={currentUser.name}
          isReturning={currentUser.isReturning}
        />
        <p className="text-muted-foreground mt-1 text-sm animate-in fade-in duration-1000 delay-700">
          {currentUser.role === "admin"
            ? "Visão geral da sua operação e desempenho da Inteligência Artificial."
            : "A Resonance IA já organizou a sua fila de atendimentos de hoje."}
        </p>
      </div>

      <ScrollArea className="flex-1 px-8 pt-8 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* ORQUESTRAÇÃO DE VIEWS */}
          {currentUser.role === "admin" ? <AdminView /> : <AgentView />}
        </div>
      </ScrollArea>
    </div>
  );
}
