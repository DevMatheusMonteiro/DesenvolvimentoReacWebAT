import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LayoutProvider } from "./contexts/LayoutContext";

import Routes from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LayoutProvider>
      <Routes />
    </LayoutProvider>
  </StrictMode>
);
