
export type StatusRequest =
  | 'idle'
  | 'success'
  | 'error'
  | 'loading'

export interface SubscribeProps {
  email: string;
  onEmailChange: (email: string) => void;
  onSubmit: () => void;
  status: StatusRequest;
  error: string | null;
  className?: string;
}

