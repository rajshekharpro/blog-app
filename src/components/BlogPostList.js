import React, { useState, useEffect } from 'react';
import { getTopHeadlines } from '../services/newsApi';
import BlogPostItem from './BlogPostItem';
import './BlogPostList.css';

const BlogPostList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTopHeadlines({ sources: 'techcrunch', pageSize: 10 });
        setArticles(data);
      } catch (error) {
        console.error('Error fetching top headlines:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-post-list">
      {articles.map((article, index) => (
        <BlogPostItem key={index} article={article} index={index} />
      ))}
    </div>
  );
};

export default BlogPostList;
