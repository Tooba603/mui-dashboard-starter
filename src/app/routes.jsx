import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RequireAuth from "../shared/components/RequireAuth";
import DashboardLayout from "../features/dashboard/components/DashboardLayout";

const HomePage = lazy(() => import("../features/marketing/pages/HomePage"));
const AboutPage = lazy(() => import("../features/marketing/pages/AboutPage"));
const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"));
const SignupPage = lazy(() => import("../features/auth/pages/SignupPage"));
const DashboardHomePage = lazy(() => import("../features/dashboard/pages/DashboardHomePage"));
const ApiExamplePage = lazy(() => import("../features/dashboard/pages/ApiExamplePage"));
const FormsDemoPage = lazy(() => import("../features/dashboard/pages/FormsDemoPage"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        }
      >
        <Route index element={<DashboardHomePage />} />
        <Route path="api-demo" element={<ApiExamplePage />} />
        <Route path="forms" element={<FormsDemoPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
