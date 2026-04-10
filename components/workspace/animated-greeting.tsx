"use client";

import { useState, useEffect } from "react";

const greetings = ["Olá", "Hello", "Hola", "Bonjour", "Ciao", "Hallo"];

interface AnimatedGreetingProps {
  name: string;
  isReturning?: boolean;
}

export function AnimatedGreeting({
  name,
  isReturning = false,
}: AnimatedGreetingProps) {
  const [greeting, setGreeting] = useState("Olá");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Se não for retorno, sorteia UM idioma aleatório e trava nele
    if (!isReturning) {
      const random = greetings[Math.floor(Math.random() * greetings.length)];
      setGreeting(random);
    }
    setMounted(true);
  }, [isReturning]);

  // Evita aquele "piscar" (hydration mismatch) antes do JS carregar
  if (!mounted) return <div className="h-9 w-full" />;

  return (
    // items-baseline garante que os textos fiquem perfeitamente alinhados na base
    <h1 className="text-3xl font-semibold tracking-tight text-foreground flex flex-wrap items-baseline gap-2">
      <span className="animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
        {isReturning ? "Bom te ver de novo," : `${greeting},`}
      </span>
      <span className="animate-in fade-in slide-in-from-left-4 duration-1000 delay-300 ease-out text-indigo-500">
        {name}! 👋
      </span>
    </h1>
  );
}
