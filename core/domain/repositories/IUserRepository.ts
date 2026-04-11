import type { User, UserRole } from "@/core/domain/entities/user";

// Contrato de persistência para User.
export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByRole(role: UserRole): Promise<User[]>;
  create(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User>;
  updateFailedLoginAttempts(id: string, attempts: number): Promise<void>;
  lockAccount(id: string, until: Date): Promise<void>;
  softDelete(id: string): Promise<void>;
}
