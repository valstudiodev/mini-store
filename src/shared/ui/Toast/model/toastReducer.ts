import { ToastAction, ToastState } from "./toastTypes";


export const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case 'SHOW_TOAST':
      return action.payload
    case 'HIDE_TOAST':
      return null
    default:
      return state
  }
}