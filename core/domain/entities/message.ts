// Quem enviou a mensagem
// "user"   = cliente do portal
// "agent"  = atendente humano no workspace
// "ai"     = resposta gerada pela IA
// "system" = evento do sistema (ex: "Chamado encerrado")
export type MessageRole = "user" | "agent" | "ai" | "system";

export interface Message {
  id: string;

  // Toda mensagem pertence a um ticket — sem isso é órfã
  ticketId: string;

  role: MessageRole;
  content: string;

  // null para mensagens de IA e do sistema (sem autor humano)
  authorId: string | null;

  // Data real do domínio — a UI formata como quiser (HH:mm, "há 5 min", etc.)
  createdAt: Date;
}
