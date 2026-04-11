// Status do ciclo de vida do chamado
export type TicketStatus = "open" | "in_progress" | "closed";

// Prioridade definida pelo sistema ou pelo agente
export type TicketPriority = "low" | "medium" | "high" | "urgent";

// Canal de origem do chamado
export type TicketChannel = "portal" | "email" | "whatsapp";

export interface Ticket {
  id: string;
  title: string;

  status: TicketStatus;
  priority: TicketPriority;
  channel: TicketChannel;

  // Relações — IDs para evitar acoplamento entre agregados
  clientId: string;
  assigneeId: string | null; // null = não atribuído

  // Controle de leitura (usado na UI da inbox)
  unread?: boolean;

  // Auditoria — obrigatório em toda entidade de domínio
  createdAt: Date;
  updatedAt: Date;
  closedAt: Date | null;
}
