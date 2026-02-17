import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/blog/123">Go to Blog Post 123</Link> |{" "}
        <Link to="/profile">Go to Profile</Link>
      </nav>
    </div>
  );
}
