import React, { useEffect, useState } from "react";
import { postService } from "@/services/api";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAllPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        MERN Blog Home Page
      </h1>

      <div className="flex flex-col gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post._id} className="p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content.substring(0, 100)}...</p>
              <Link to={`/post/${post._id}`}>
                <Button variant="default">View Post</Button>
              </Link>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">No posts found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
