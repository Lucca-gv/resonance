"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  ChatBotIcon,
  Home11Icon,
  UserCircleIcon,
  Logout01Icon,
  MessageMultiple01Icon,
  Clock01Icon,
  AnalyticsUpIcon,
  Cash01Icon,
} from "hugeicons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Simulação do usuário
const currentUser = {
  name: "Lucas",
  email: "lucas@resonance.com",
  role: "admin",
  avatarUrl: "",
};

// Simulação da Triagem da IA: Cada assunto recebe um ícone contextual
const recentChats = [
  {
    id: "TKT-1042",
    title: "Dúvida sobre cobrança da fatura",
    time: "Agora",
    icon: Cash01Icon,
  },
  {
    id: "TKT-1041",
    title: "Problema ao fazer login",
    time: "10:15",
    icon: UserCircleIcon,
  },
  {
    id: "TKT-1038",
    title: "Cancelamento de assinatura",
    time: "09:30",
    icon: Logout01Icon,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  // Classe CSS customizada para o item ativo
  const activeClass =
    "data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:font-semibold";

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="hover:bg-transparent cursor-default"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ChatBotIcon className="size-5" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Resonance</span>
                <span className="truncate text-xs text-muted-foreground">
                  Copilot Workspace
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Grupo 1: Workspace / Navegação Principal */}
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard"}
                  className={activeClass}
                >
                  <a href="/dashboard">
                    <Home11Icon className="size-4" />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/inbox"}
                  className={activeClass}
                >
                  <a href="/inbox">
                    <MessageMultiple01Icon className="size-4" />
                    <span>Caixa de Entrada</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/history"}
                  className={activeClass}
                >
                  <a href="/history">
                    <Clock01Icon className="size-4" />
                    <span>Histórico Global</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Grupo 2: Seus Atendimentos */}
        <SidebarGroup>
          <SidebarGroupLabel>Seus Atendimentos (Hoje)</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentChats.map((chat) => {
                const Icon = chat.icon;

                return (
                  <SidebarMenuItem key={chat.id}>
                    <SidebarMenuButton
                      asChild
                      tooltip={chat.title}
                      isActive={pathname === `/chat/${chat.id}`}
                      className={`h-auto py-2 ${activeClass}`}
                    >
                      <a
                        href={`/chat/${chat.id}`}
                        className="flex items-center gap-2"
                      >
                        <Icon className="size-4 text-muted-foreground shrink-0" />
                        <div className="flex flex-col flex-1 overflow-hidden">
                          <span className="truncate text-sm leading-tight">
                            {chat.title}
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground leading-tight">
                            {chat.id} • {chat.time}
                          </span>
                        </div>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Grupo 3: Administração */}
        {currentUser.role === "admin" && (
          <SidebarGroup>
            <SidebarGroupLabel>Administração</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/settings/ai"}
                    className={activeClass}
                  >
                    <a href="/settings/ai">
                      <ChatBotIcon className="size-4" />
                      <span>Treinamento IA (RAG)</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/metrics"}
                    className={activeClass}
                  >
                    <a href="/metrics">
                      <AnalyticsUpIcon className="size-4" />
                      <span>Métricas e Relatórios</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src={currentUser.avatarUrl}
                      alt={currentUser.name}
                    />
                    <AvatarFallback className="rounded-lg bg-primary/10 text-primary font-semibold">
                      {currentUser.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {currentUser.name}
                    </span>
                    <span className="truncate text-xs text-muted-foreground">
                      {currentUser.role === "admin" ? "Administrator" : "Agent"}
                    </span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <UserCircleIcon className="mr-2 size-4" />
                  <span>Conta</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
                  <Logout01Icon className="mr-2 size-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
