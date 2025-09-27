import { Routes, Route, Navigate } from "react-router-dom";

import QuizPage from "../pages/QuizPage";
import InlineEvent from "../pages/InlineEvent";
import HandleEvent from "../pages/HandleEvent";
import HandleEventXInlineEvent from "../pages/HandleEventxInlineEvent";
import AdminPage from "../pages/AdminPage";
import SelectCountries from "../pages/SelectCountries";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/inline-event" element={<InlineEvent />} />
      <Route path="/handle-event" element={<HandleEvent />} />
      <Route
        path="/handle-event-x-inline-event"
        element={<HandleEventXInlineEvent />}
      />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/select-countries" element={<SelectCountries />} />
    </Routes>
  );
}
