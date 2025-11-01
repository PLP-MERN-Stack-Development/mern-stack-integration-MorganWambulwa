import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={post.featuredImage} alt={post.title} className="mb-2 w-full h-48 object-cover"/>
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link to={`/posts/${post._id}`} className="text-blue-500 mt-2 inline-block">Read More</Link>
    </div>
  );
};

export default PostCard;
