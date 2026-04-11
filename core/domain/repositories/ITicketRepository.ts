import type { Ticket, TicketStatus } from "@/core/domain/entities/ticket";

// Contrato de persistência para Ticket.
// A implementação concreta (Supabase, etc.) fica em core/infrastructure/database/
// Os use-cases dependem DESTA interface, nunca da implementação direta.
export interface ITicketRepository {
  findById(id: string): Promise<Ticket | null>;
  findByClientId(clientId: string): Promise<Ticket[]>;
  findByAssigneeId(assigneeId: string): Promise<Ticket[]>;
  findByStatus(status: TicketStatus): Promise<Ticket[]>;
  create(ticket: Omit<Ticket, "id" | "createdAt" | "updatedAt">): Promise<Ticket>;
  updateStatus(id: string, status: TicketStatus): Promise<Ticket>;
  assign(id: string, assigneeId: string): Promise<Ticket>;
  close(id: string): Promise<Ticket>;
}
