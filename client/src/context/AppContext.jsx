import { createContext, useState, useEffect } from 'react';
import { postService, categoryService, authService } from '../services/api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(authService.getCurrentUser());

  // Load posts
  const fetchPosts = async () => {
    try {
      const data = await postService.getAllPosts();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Load categories
  const fetchCategories = async () => {
    try {
      const data = await categoryService.getAllCategories();
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  return (
    <AppContext.Provider value={{ posts, setPosts, categories, user, setUser, fetchPosts }}>
      {children}
    </AppContext.Provider>
  );
};
