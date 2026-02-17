// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = false; // simulate login status
  return isAuthenticated ? children : <Navigate to="/" replace />;
}
