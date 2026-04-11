import type { ITicketRepository } from "@/core/domain/repositories/ITicketRepository";
import type { Ticket, TicketStatus } from "@/core/domain/entities/ticket";

export interface ListTicketsByClientInput {
  clientId: string;
  status?: TicketStatus;
}

export interface ListTicketsByClientOutput {
  activeTickets: Ticket[];
  closedTickets: Ticket[];
}

export class ListTicketsByClientUseCase {
  constructor(private readonly ticketRepository: ITicketRepository) {}

  async execute(input: ListTicketsByClientInput): Promise<ListTicketsByClientOutput> {
    const tickets = await this.ticketRepository.findByClientId(input.clientId);

    return {
      activeTickets: tickets.filter((t) => t.status === "open" || t.status === "in_progress"),
      closedTickets: tickets.filter((t) => t.status === "closed"),
    };
  }
}
