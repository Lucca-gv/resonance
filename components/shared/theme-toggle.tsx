"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span className="dark:hidden">🌞</span>
      <span className="hidden dark:block">🌙</span>
      <span className="sr-only">Trocar tema</span>
    </Button>
  );
}
