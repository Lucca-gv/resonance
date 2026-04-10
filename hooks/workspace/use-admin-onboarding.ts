"use client";

import { useEffect, useRef } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export function useAdminOnboarding(isFirstLogin: boolean) {
  const driverObj = useRef<any>(null);

  useEffect(() => {
    if (!isFirstLogin) return;

    const timer = setTimeout(() => {
      driverObj.current = driver({
        showProgress: true,
        allowClose: false,
        overlayOpacity: 0.5,
        stagePadding: 8,
        stageRadius: 12,
        progressText: "Passo {{current}} de {{total}}",
        nextBtnText: "Próximo &rarr;",
        prevBtnText: "&larr; Anterior",
        doneBtnText: "Começar agora",
        steps: [
          {
            popover: {
              title: "✨ Bem-vindo ao Resonance",
              description:
                "O seu novo colega de trabalho acabou de chegar. Vamos fazer um tour rápido de 1 minuto para configurar a sua operação.",
              side: "over",
              align: "center",
            },
          },
          {
            element: "#tour-admin-kpis",
            popover: {
              title: "Visão Geral",
              description:
                "Aqui ficarão os gráficos de resolução da IA. Você saberá exatamente quanto tempo e dinheiro o Resonance está economizando para você.",
              side: "bottom",
              align: "start",
            },
          },
          {
            element: "#tour-admin-menu",
            popover: {
              title: "A Central de Comando",
              description:
                "É aqui que você convida sua equipe, gerencia clientes e ajusta as configurações do sistema.",
              side: "right",
              align: "center",
              onNextClick: () => {
                const menuTrigger =
                  document.getElementById("tour-admin-menu");
                if (
                  menuTrigger &&
                  menuTrigger.getAttribute("data-state") === "closed"
                ) {
                  menuTrigger.click();
                }

                setTimeout(() => {
                  driverObj.current.moveNext();
                }, 250);
              },
            },
          },
          {
            element: "#tour-ai-training",
            popover: {
              title: "O Cérebro da Operação",
              description:
                "O seu Copilot ainda não sabe nada sobre sua empresa. Clique aqui para enviar seus PDFs e site para ele estudar!",
              side: "right",
              align: "center",
            },
          },
        ],
      });

      driverObj.current.drive();
    }, 2000); // 2 segundos após a tela carregar

    return () => clearTimeout(timer);
  }, [isFirstLogin]);

  return null;
}
