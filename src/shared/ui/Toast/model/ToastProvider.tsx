import { useEffect, useReducer } from "react";
import { ToastProviderProps, ToastState } from "./toastTypes";
import { toastReducer } from "./toastReducer";
import { ToastContext } from "./ToastContext";

const initialState: ToastState = null

function ToastProvider({
  children
}: ToastProviderProps) {

  const [state, dispatch] = useReducer(toastReducer, initialState)

  useEffect(() => {
    if (state === null) return

    const timer = setTimeout(() => {
      dispatch({
        type: 'HIDE_TOAST'
      })
    }, 2000);

    return () => {
      clearTimeout(timer)
    }

  }, [state]);


  return (
    <ToastContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;