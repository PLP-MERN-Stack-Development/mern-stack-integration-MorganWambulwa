import { useState } from 'react';
import { postService } from '../services/api';

const CommentList = ({ comments, postId }) => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState(comments);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const newComment = await postService.addComment(postId, { content: comment });
      setCommentList([...commentList, newComment]);
      setComment('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2">Comments</h3>
      <ul className="mb-4">
        {commentList.map(c => (
          <li key={c._id} className="mb-2 border-b pb-1">{c.content}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Add a comment"
          className="flex-1 border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">Post</button>
      </form>
    </div>
  );
};

export default CommentList;
