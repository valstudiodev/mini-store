export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export type ModeType = 'login' | 'signup'

export interface AuthFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export type RequestStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'error'