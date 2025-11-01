import React, { useEffect, useState } from "react";
import { postService } from "../services/api";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.getAllPosts(); // Ensure this returns an array of posts
      setPosts(data);
    };
    fetchPosts();
  }, []);

  if (!posts.length) return <p>No posts found</p>;

  return (
    <div className="max-w-4xl mx-auto">
      {posts.map((post) => (
        <div key={post._id} className="border p-4 mb-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content.slice(0, 100)}...</p>
          <Link
            to={`/posts/${post.slug}`} // Link uses slug
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            View Post
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
