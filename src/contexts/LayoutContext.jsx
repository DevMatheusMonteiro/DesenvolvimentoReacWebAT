import { createContext, useContext, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyles";

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [theme, setTheme] = useState(darkTheme);

  function toggleTheme() {
    setTheme((prev) => (prev.title == "light" ? darkTheme : lightTheme));
  }

  return (
    <LayoutContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </LayoutContext.Provider>
  );
}

export const useLayout = () => useContext(LayoutContext);
