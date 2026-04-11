import type { IMessageRepository } from "@/core/domain/repositories/IMessageRepository";
import type { Message, MessageRole } from "@/core/domain/entities/message";

export interface SendMessageInput {
  ticketId: string;
  content: string;
  role: MessageRole;
  authorId?: string | null;
}

// Use Case: salva a mensagem no repositório e retorna a mensagem persistida.
// A resposta da IA é responsabilidade de um use case separado (AICopilotUseCase — Fase 4).
export class SendMessageUseCase {
  constructor(private readonly messageRepository: IMessageRepository) {}

  async execute(input: SendMessageInput): Promise<Message> {
    const message = await this.messageRepository.create({
      ticketId: input.ticketId,
      content: input.content,
      role: input.role,
      authorId: input.authorId ?? null,
    });

    return message;
  }
}
