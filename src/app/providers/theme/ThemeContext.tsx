import { createContext } from "react";
import { ThemeActions, ThemeState } from "./types";


interface ThemeContextType {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeActions>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)