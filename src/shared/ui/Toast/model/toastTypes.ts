export type ToastType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'

export type ToastState = ToastMessageProps | null

export type ToastAction =
  | {
    type: 'SHOW_TOAST',
    payload: ToastMessageProps,
  }
  | {
    type: 'HIDE_TOAST',
  }

export interface ToastMessageProps {
  type: ToastType;
  message: string
}

export interface ToastProviderProps {
  children: React.ReactNode
}

