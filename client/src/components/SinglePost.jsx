import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postService } from "../services/api";

const SinglePost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await postService.getPost(slug); // Fetch by slug
        setPost(data);
      } catch (err) {
        setError("Post not found");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto border p-6">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
      {post.featuredImage && (
        <img
          src={`${import.meta.env.VITE_API_URL}/uploads/${post.featuredImage}`}
          alt={post.title}
          className="w-full max-h-96 object-cover"
        />
      )}
    </div>
  );
};

export default SinglePost;
