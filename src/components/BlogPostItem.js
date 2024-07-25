import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPostItem.css';

const BlogPostItem = ({ article, index }) => {
    return (
        <div className="blog-post-item">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link to={`/post/${index}`}>Read more</Link>
        </div>
    );
};

export default BlogPostItem;
