import { Navigate } from "react-router-dom";

// Simple custom hook to simulate authentication
function useAuth() {
  // In a real app, you'd check auth state from context or a provider
  const isAuthenticated = false; // change to true to simulate login
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" replace />;
}
