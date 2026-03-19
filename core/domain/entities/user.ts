export type UserRole = "admin" | "agent";

export interface User {
  id: string;

  name: string;
  email: string;

  passwordHash: string;

  failedLoginAttempts: number;
  lockedUntil?: Date | null;

  role: UserRole;
  avatarUrl?: string | null;

  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}
