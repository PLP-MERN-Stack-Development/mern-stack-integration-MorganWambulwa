import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postService } from "../services/api";

const PostPage = () => {
  const { slug } = useParams(); // get the post slug from URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await postService.getPostBySlug(slug);
        setPost(data);
      } catch (err) {
        setError("Failed to load post.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">
        By {post.author?.name || "Unknown"} | {new Date(post.createdAt).toLocaleDateString()}
      </p>
      {post.featuredImage && (
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-auto mb-4"
        />
      )}
      <div className="prose max-w-full">
        {post.content}
      </div>
    </div>
  );
};

export default PostPage;
