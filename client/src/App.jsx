import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "@/components/Home";
import PostList from "@/components/PostList";
import SinglePost from "@/components/SinglePost";

function App() {
  return (
    <div>
      {/* Simple Navigation */}
      <nav className="bg-gray-100 p-4 mb-6">
        <div className="max-w-4xl mx-auto flex gap-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/posts" className="text-blue-600 hover:underline">
            Posts
          </Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:slug" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
