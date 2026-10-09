export type Theme = 'dark' | 'light'

export interface ThemeState {
  theme: Theme
}

export type ThemeActions =
  {
    type: 'TOGGLE_THEME',
  } 