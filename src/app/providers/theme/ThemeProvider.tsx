import { themeReducer } from "./themeReducer";
import { useReducer, useEffect } from "react";
import { ThemeState } from "./types";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode
}

const initialThemeState: ThemeState = {
  theme: 'light'
}

function ThemeProvider({
  children
}: ThemeProviderProps) {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  console.log('---Theme', state);


  useEffect(() => {
    document.documentElement.dataset.theme = state.theme
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{
      state,
      dispatch
    }} >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;