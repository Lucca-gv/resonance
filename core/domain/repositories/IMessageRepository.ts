import type { Message } from "@/core/domain/entities/message";

// Contrato de persistência para Message.
// Mensagens sempre pertencem a um Ticket (ticketId é obrigatório).
export interface IMessageRepository {
  findByTicketId(ticketId: string): Promise<Message[]>;
  create(message: Omit<Message, "id" | "createdAt">): Promise<Message>;
}
