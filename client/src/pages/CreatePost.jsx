import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { postService } from '../services/api';
import { AppContext } from '../context/AppContext';

const CreatePost = () => {
  const { fetchPosts } = useContext(AppContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', content: '', category: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await postService.createPost(form);
      fetchPosts();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input mb-2 w-full"/>
        <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" className="input mb-2 w-full h-40"/>
        <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" className="input mb-2 w-full"/>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
