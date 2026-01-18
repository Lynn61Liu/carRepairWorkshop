import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Settings from "../pages/Settings";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<div className="p-6">404</div>} />
    </Routes>
  );
}
