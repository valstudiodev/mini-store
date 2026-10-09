import { AuthUser } from "@/shared/types/Role";

export type RequestStatus =
  | 'idle'
  | 'loading'
  | 'succeeded'
  | 'failed'


export interface AuthState {
  user: AuthUser | null,
  initialized: boolean;
}

export interface AuthModalState {
  isOpen: boolean
}