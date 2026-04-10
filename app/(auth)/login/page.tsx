import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/shared/theme-toggle"; // Caminho corrigido!
import { ChatBotIcon } from "hugeicons-react";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-4">
      {/* 1. Bolhas de Ressonância */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Indigo — top-left âncora */}
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-600/30 blur-[100px] animate-drift" />

        {/* Purple — right — morph orgânico */}
        <div
          className="absolute top-[15%] -right-[10%] w-[60%] h-[60%] animate-morph bg-purple-600/25 blur-[100px]"
          style={{ animationDelay: "2s" }}
        />

        {/* Blue — bottom — drift reverso */}
        <div
          className="absolute -bottom-[15%] left-[15%] w-[75%] h-[75%] rounded-full bg-blue-600/20 blur-[100px] animate-drift-reverse"
          style={{ animationDelay: "4s" }}
        />

        {/* Cyan — center-left accent */}
        <div
          className="absolute top-[40%] -left-[5%] w-[40%] h-[40%] rounded-full bg-cyan-500/15 blur-[80px] animate-float"
          style={{ animationDelay: "6s" }}
        />

        {/* Violet — bottom-right accent */}
        <div
          className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] rounded-full bg-violet-500/15 blur-[80px] animate-drift"
          style={{ animationDelay: "8s" }}
        />
      </div>

      <div className="absolute right-8 top-8 z-50">
        <ThemeToggle />
      </div>

      {/* 2. Card com Liquid Glass */}
      <div className="relative z-10 w-full max-w-100 overflow-hidden rounded-[28px] border border-white/30 bg-white/25 px-8 py-10 shadow-[0_8px_60px_-12px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.6)] backdrop-blur-2xl dark:border-white/8 dark:bg-white/4 dark:shadow-[0_8px_60px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)]">
        {/* Glass highlight - reflexo superior */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-[28px] bg-linear-to-b from-white/40 to-transparent dark:from-white/6" />
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
