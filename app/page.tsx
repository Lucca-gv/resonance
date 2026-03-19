import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground p-8 gap-8">
      <h1 className="text-4xl font-bold tracking-tight">Resonance</h1>
      <p className="text-muted-foreground text-lg text-center max-w-md">
        Plataforma de atendimento invisível com Handoff Inteligente.
      </p>
      <ThemeToggle />
    </main>
  );
}
