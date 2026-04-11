import type { ITicketRepository } from "@/core/domain/repositories/ITicketRepository";
import type { Ticket, TicketChannel, TicketPriority } from "@/core/domain/entities/ticket";

// Input tipado: o que a camada de apresentação (hook/page) precisa fornecer
export interface CreateTicketInput {
  title: string;
  clientId: string;
  channel: TicketChannel;
  priority?: TicketPriority;
}

// Use Case: única responsabilidade é criar um ticket aplicando as regras de negócio.
// Não sabe nada de React, HTTP ou qual banco está sendo usado.
export class CreateTicketUseCase {
  constructor(private readonly ticketRepository: ITicketRepository) {}

  async execute(input: CreateTicketInput): Promise<Ticket> {
    const ticket = await this.ticketRepository.create({
      title: input.title,
      status: "open",
      priority: input.priority ?? "medium",
      channel: input.channel,
      clientId: input.clientId,
      assigneeId: null,
      unread: true,
      closedAt: null,
    });

    return ticket;
  }
}
