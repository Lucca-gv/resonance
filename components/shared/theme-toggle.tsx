"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun01Icon, Moon01Icon } from "hugeicons-react"; // Usando os ícones modernos

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full bg-background/50 backdrop-blur-sm border-border/40"
    >
      <Sun01Icon className="size-5 dark:hidden text-zinc-600" />
      <Moon01Icon className="hidden size-5 dark:block text-zinc-400" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
