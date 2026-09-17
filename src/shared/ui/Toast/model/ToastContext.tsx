import { createContext } from "react";
import { ToastState, ToastAction } from "./toastTypes";

interface ToastMessageType {
  state: ToastState;
  dispatch: React.Dispatch<ToastAction>
}

export const ToastContext = createContext<ToastMessageType | null>(null)