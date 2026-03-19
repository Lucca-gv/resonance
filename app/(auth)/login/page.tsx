import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/shared/theme-toggle"; // Caminho corrigido!
import { ChatBotIcon } from "hugeicons-react";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-4">
      {/* 1. O Efeito de Ressonância (Otimizado para Light e Dark Mode) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Onda 1: Foco primário (Mais forte no light, suave no dark) */}
        <div className="absolute h-100400px] animate-resonate rounded-full bg-primary/20 blur-[100px] dark:bg-primary/10" />

        {/* Onda 2: Contraste Azul */}
        <div
          className="absolute right-1/4 top-1/4 h-125 w-125 animate-resonate-slow rounded-full bg-blue-500/20 blur-[120px] dark:bg-blue-500/10"
          style={{ animationDelay: "2s" }}
        />

        {/* Onda 3: Profundidade Roxa */}
        <div
          className="absolute bottom-1/4 left-1/4 h-75 w-75 animate-resonate rounded-full bg-purple-500/20 blur-[100px] dark:bg-purple-500/10"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <div className="absolute right-8 top-8 z-50">
        <ThemeToggle />
      </div>

      {/* 2. O Card Flutuante */}
      <div className="relative z-10 w-full max-w-100 rounded-[24px] border border-border/40 bg-background/60 px-8 py-10 shadow-2xl shadow-black/5 backdrop-blur-2xl dark:border-white/10 dark:bg-black/40 dark:shadow-black/50">
        <div className="mb-8 flex flex-col items-center space-y-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-2 shadow-inner">
            <ChatBotIcon className="size-6" />
          </div>
          <h1 className="text-2xl font-medium tracking-tight">
            Welcome to Resonance
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to access your workspace
          </p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs font-medium text-muted-foreground"
            >
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              className="h-11 bg-background/50 text-base placeholder:text-muted-foreground/40 focus-visible:ring-1"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-xs font-medium text-muted-foreground"
              >
                Password
              </Label>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="h-11 bg-background/50 text-base focus-visible:ring-1"
            />
          </div>

          <Button className="h-11 w-full text-base shadow-md transition-all active:scale-[0.98] mt-4 rounded-xl">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
