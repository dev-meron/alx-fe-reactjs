import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });

  if (isLoading) return <h2>Loading posts...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts (React Query)</h2>

      <button onClick={refetch} style={{ marginBottom: "20px" }}>
        Refetch Posts
      </button>

      {posts.slice(0, 10).map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;