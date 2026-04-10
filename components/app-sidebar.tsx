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
  Settings01Icon,
  UserGroupIcon,
  UserMultiple02Icon,
  ArrowRight01Icon,
  Folder01Icon,
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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Mock do usuário será mantido até conectarmos com a auth real
const currentUser = {
  name: "Lucas",
  email: "lucas@resonance.com",
  role: "admin",
  avatarUrl: "",
};

export function AppSidebar() {
  const pathname = usePathname();

  const activeClass =
    "data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:font-semibold";

  // Verifica se alguma rota filha de admin está ativa para manter a gaveta aberta
  const isAdminRouteActive =
    pathname.startsWith("/settings") || pathname.startsWith("/admin");

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

        {/* Grupo 2: Seus Atendimentos - Limpo de mocks, pronto para os dados reais */}
        <SidebarGroup>
          <SidebarGroupLabel>Seus Atendimentos</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="text-xs text-muted-foreground px-2 py-4 text-center">
                  Nenhum atendimento ativo no momento.
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Grupo 3: Administração (Gaveta) */}
        {currentUser.role === "admin" && (
          <SidebarGroup>
            <SidebarGroupLabel>Administração</SidebarGroupLabel>
            <SidebarMenu>
              <Collapsible
                asChild
                defaultOpen={isAdminRouteActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip="Ajustes e Gestão"
                      id="tour-admin-menu"
                    >
                      <Settings01Icon className="size-4" />
                      <span>Configurações</span>
                      <ArrowRight01Icon className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === "/settings/ai"}
                          className={activeClass}
                          id="tour-ai-training"
                        >
                          <a href="/settings/ai">
                            <ChatBotIcon className="size-4" />
                            <span>Treinamento da IA</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === "/admin/team"}
                          className={activeClass}
                        >
                          <a href="/admin/team">
                            <UserGroupIcon className="size-4" />
                            <span>Equipe Interna</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === "/admin/customers"}
                          className={activeClass}
                        >
                          <a href="/admin/customers">
                            <UserMultiple02Icon className="size-4" />
                            <span>Clientes</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>

                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname === "/metrics"}
                          className={activeClass}
                        >
                          <a href="/metrics">
                            <AnalyticsUpIcon className="size-4" />
                            <span>Métricas</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
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
