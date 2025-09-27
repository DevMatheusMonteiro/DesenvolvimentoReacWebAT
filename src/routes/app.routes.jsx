import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import QuizPage from "../pages/QuizPage";
import InlineEvent from "../pages/InlineEvent";
import HandleEvent from "../pages/HandleEvent";
import HandleEventXInlineEvent from "../pages/HandleEventxInlineEvent";
import AdminPage from "../pages/AdminPage";
import SelectCountries from "../pages/SelectCountries";
import Products from "../pages/Products";
import SelectFood from "../pages/SelectFood";
import SimpleForm from "../pages/SimpleForm";
import SimpleFormValidation from "../pages/SimpleFormValidation";
import HookForm from "../pages/HookForm";
import HookFormValidation from "../pages/HookFormValidation";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/inline-event" element={<InlineEvent />} />
      <Route path="/handle-event" element={<HandleEvent />} />
      <Route
        path="/handle-event-x-inline-event"
        element={<HandleEventXInlineEvent />}
      />
      <Route path="/admin-page/:isAdminOn" element={<AdminPage />} />
      <Route path="/select-countries/:country" element={<SelectCountries />} />
      <Route path="/products" element={<Products />} />
      <Route path="/select-food" element={<SelectFood />} />
      <Route path="/simple-form" element={<SimpleForm />} />
      <Route
        path="/simple-form-validation"
        element={<SimpleFormValidation />}
      />
      <Route path="/hook-form" element={<HookForm />} />
      <Route path="/hook-form-validation" element={<HookFormValidation />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
