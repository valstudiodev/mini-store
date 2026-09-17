import { useContext } from "react";
import { ToastContext } from "./ToastContext";

function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useContext must be used inside ToastMessageProvider");
  }
  return context
}

export default useToast