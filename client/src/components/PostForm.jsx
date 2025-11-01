import React, { useState } from "react"; 
import { postService, categoryService } from "../services/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useApi } from "../hooks/useApi";

const PostForm = () => {
  const [form, setForm] = useState({ title: "", content: "", category: "" });

  // Fetch categories using custom hook
  const { data: categories, loading, error } = useApi(categoryService.getCategories);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postService.createPost(form);
      setForm({ title: "", content: "", category: "" });
      alert("Post created successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to create post");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <Input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" />

      <Textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" className="h-40" />

      {/* Category Dropdown */}
      {loading ? (
        <p>Loading categories...</p>
      ) : error ? (
        <p>Error loading categories</p>
      ) : (
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        >
          <option value="">Select a category</option>
          {categories?.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      )}

      <Button type="submit" variant="default" size="default">
        Submit
      </Button>
    </form>
  );
};

export default PostForm;
