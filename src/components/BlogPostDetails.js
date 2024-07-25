import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTopHeadlines } from '../services/newsApi';
import './BlogPostDetails.css';

const BlogPostDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await getTopHeadlines({ sources: 'techcrunch', pageSize: 10 });
        setArticle(articles[id]);
      } catch (error) {
        console.error('Error fetching post details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="blog-post-details">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
      <br />
      <Link to="/">Back to list</Link>
    </div>
  );
};

export default BlogPostDetails;
