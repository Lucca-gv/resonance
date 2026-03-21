export type MessageRole = "user" | "ai" | "system";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  time: string;
}
