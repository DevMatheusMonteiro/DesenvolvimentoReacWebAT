import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LayoutProvider } from "./contexts/LayoutContext";
import { ToastProvider } from "./components/Toast";

import Routes from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LayoutProvider>
      <Routes />
      <ToastProvider />
    </LayoutProvider>
  </StrictMode>
);
