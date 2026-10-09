import { ThemeActions, ThemeState } from "./types";


export const themeReducer = (state: ThemeState, action: ThemeActions): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        theme: state.theme === 'light' ? 'dark' : 'light',
      }

    default:
      return state
  }
}