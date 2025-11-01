import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postService } from '../services/api';
import { AppContext } from '../context/AppContext';
import PostForm from '../components/PostForm';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchPosts } = useContext(AppContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const data = await postService.getPost(id);
      setPost(data);
    };
    loadPost();
  }, [id]);

  const handleUpdate = async (updatedData) => {
    await postService.updatePost(id, updatedData);
    fetchPosts();
    navigate(`/posts/${id}`);
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <PostForm initialData={post} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditPost;
