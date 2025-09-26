import { BrowserRouter, Route, Navigate } from "react-router-dom";

import AppRoutes from "./app.routes";

export default function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
