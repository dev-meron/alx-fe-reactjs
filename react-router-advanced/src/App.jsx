import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/blog/:postId" element={<BlogPost />} />

      {/* Protected Nested Routes */}
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      >
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
