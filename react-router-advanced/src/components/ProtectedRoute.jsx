import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Simulate authentication status
  const isAuthenticated = false; // change to true to simulate logged-in user

  // If authenticated, render children; otherwise redirect to home
  return isAuthenticated ? children : <Navigate to="/" replace />;
}
