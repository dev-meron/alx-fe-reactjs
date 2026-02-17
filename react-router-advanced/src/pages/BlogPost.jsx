// BlogPost.jsx
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();
  return <h2>Viewing Blog Post ID: {postId}</h2>;
}
