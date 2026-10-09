import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useContext must be used inside ThemeProvider");
  }

  return context
}

export default useTheme;