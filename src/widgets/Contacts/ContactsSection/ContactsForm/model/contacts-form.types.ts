

export interface ContactsFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type RequestStatusType =
  | 'idle'
  | 'success'
  | 'error'
  | 'loading'