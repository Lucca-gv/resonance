"use client";

import * as React from "react";
import {
  ChatBotIcon,
  Home11Icon,
  Settings01Icon,
  UserCircleIcon,
  Logout01Icon,
  MessageMultiple01Icon,
  Clock01Icon,
  AnalyticsUpIcon,
  Comment02Icon,
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

// 1. Simulação do usuário
const currentUser = {
  name: "Lucas",
  email: "lucas@resonance.com",
  role: "admin",
  avatarUrl: "",
};

// 2. Simulação dos chats recentes (Teremos isso vindo do banco depois)
const recentChats = [
  { id: "TKT-1042", title: "Dúvida sobre cobrança da fatura", time: "Agora" },
  { id: "TKT-1041", title: "Problema ao fazer login", time: "10:15" },
  { id: "TKT-1038", title: "Cancelamento de assinatura", time: "09:30" },
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      {/* Cabeçalho */}
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
        {/* Grupo 1: Navegação Principal */}
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <a href="/dashboard">
                    <Home11Icon className="size-4" />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard/inbox">
                    <MessageMultiple01Icon className="size-4" />
                    <span>Caixa de Entrada</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard/history">
                    <Clock01Icon className="size-4" />
                    <span>Histórico Global</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Grupo 2: Os Chats do Funcionário (A sua ideia aplicada) */}
        <SidebarGroup>
          <SidebarGroupLabel>Seus Atendimentos (Hoje)</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentChats.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton asChild tooltip={chat.title}>
                    <a
                      href={`/dashboard/chat/${chat.id}`}
                      className="flex items-center gap-2"
                    >
                      <Comment02Icon className="size-4 text-muted-foreground shrink-0" />
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
              ))}
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
                  <SidebarMenuButton asChild>
                    <a href="/dashboard/settings/ai">
                      <ChatBotIcon className="size-4" />
                      <span>Treinamento IA (RAG)</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/dashboard/metrics">
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

      {/* Rodapé do Perfil */}
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
