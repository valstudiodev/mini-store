export type Role = 'user' | 'admin'

export interface AuthUser {
  uid: string;
  email: string;
  role: Role
}

