import { Routes, Route, Navigate } from "react-router-dom";

import QuizPage from "../pages/QuizPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}
