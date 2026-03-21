"use client";

import { useState } from "react";
import { UserCircleIcon, Shield01Icon, Camera01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface SettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  clientName: string;
  clientInitials: string;
}

export function SettingsModal({
  open,
  onOpenChange,
  clientName,
  clientInitials,
}: SettingsModalProps) {
  const [settingsTab, setSettingsTab] = useState<"profile" | "security">(
    "profile",
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* A MÁGICA DO TAMANHO ESTÁ AQUI:
        Usamos o style={{ maxWidth: '850px' }} para ignorar o bloqueio de 512px do shadcn.
        O [&>button] ajusta a posição do "X" nativo do shadcn para não ficar por cima do texto.
      */}
      <DialogContent
        className="p-0 gap-0 overflow-hidden bg-background border-border/50 [&>button]:right-6 [&>button]:top-6 [&>button]:text-muted-foreground hover:[&>button]:text-foreground"
        style={{ maxWidth: "850px", width: "95vw" }}
      >
        {/* RESOLVE O WARNING DO TERMINAL: Fica invisível, mas o leitor de tela do Radix UI encontra */}
        <div className="sr-only">
          <DialogTitle>Configurações da Conta</DialogTitle>
          <DialogDescription>
            Gerencie suas informações de perfil, dados pessoais e configurações
            de segurança.
          </DialogDescription>
        </div>

        {/* Usando GRID em vez de Flex. 
          Coluna 1 = Exatos 250px para a Sidebar. Coluna 2 = O resto do espaço (1fr).
        */}
        <div className="grid grid-cols-[250px_1fr] h-[80vh] max-h-150 w-full">
          {/* Sidebar Interna do Modal */}
          <div className="bg-muted/30 border-r border-border/50 p-4 flex flex-col gap-2 h-full">
            <div className="mb-4 text-left px-2 pt-2">
              <h2 className="text-xl font-semibold">Configurações</h2>
            </div>

            <button
              onClick={() => setSettingsTab("profile")}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${settingsTab === "profile" ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            >
              <UserCircleIcon className="size-4" />
              Meu Perfil
            </button>
            <button
              onClick={() => setSettingsTab("security")}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${settingsTab === "security" ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            >
              <Shield01Icon className="size-4" />
              Segurança e Acesso
            </button>
          </div>

          {/* Área de Conteúdo da Direita */}
          <div className="h-full overflow-y-auto">
            <div className="p-8 w-full max-w-2xl">
              {/* ABA: PERFIL */}
              {settingsTab === "profile" && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      Meu Perfil
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Gerencie suas informações públicas.
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pb-6 border-b border-border/50">
                    <Avatar className="size-20 rounded-full border-2 border-border shadow-sm">
                      <AvatarFallback className="bg-indigo-500/10 text-indigo-600 text-xl font-medium">
                        {clientInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 gap-2 w-fit"
                      >
                        <Camera01Icon className="size-3.5" />
                        Alterar Foto
                      </Button>
                      <span className="text-[10px] text-muted-foreground">
                        JPG, GIF ou PNG. Máx de 2MB.
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nome</Label>
                      <Input
                        id="firstName"
                        defaultValue={clientName}
                        className="h-10 rounded-lg bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Sobrenome</Label>
                      <Input
                        id="lastName"
                        defaultValue="Silva"
                        className="h-10 rounded-lg bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="joao.silva@exemplo.com"
                      className="h-10 rounded-lg bg-background"
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button
                      onClick={() => onOpenChange(false)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6"
                    >
                      Salvar Alterações
                    </Button>
                  </div>
                </div>
              )}

              {/* ABA: SEGURANÇA */}
              {settingsTab === "security" && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      Segurança e Acesso
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Atualize sua senha e configure a autenticação em duas
                      etapas (2FA).
                    </p>
                  </div>

                  <div className="space-y-4 pb-6 border-b border-border/50">
                    <h4 className="text-sm font-semibold">Alterar Senha</h4>
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Senha Atual</Label>
                      <Input
                        id="current-password"
                        type="password"
                        placeholder="••••••••"
                        className="h-10 rounded-lg bg-background max-w-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nova Senha</Label>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="Mínimo de 8 caracteres"
                        className="h-10 rounded-lg bg-background max-w-sm"
                      />
                    </div>
                    <Button
                      variant="outline"
                      className="mt-2 h-9 text-xs font-medium w-fit"
                    >
                      Atualizar Senha
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">
                      Autenticação em Duas Etapas (2FA)
                    </h4>
                    <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/30">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">
                          Aplicativo Autenticador
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Adiciona uma camada extra de segurança.
                        </span>
                      </div>
                      <Button
                        variant="secondary"
                        className="h-8 text-xs font-medium bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20 border-0"
                      >
                        Configurar 2FA
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
