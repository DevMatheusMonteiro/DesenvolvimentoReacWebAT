import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProviderContext } from "./contexts/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderContext>Hello</ThemeProviderContext>
  </StrictMode>
);
