import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';

function App() {
  return (
    <Router basename="/blog-app">
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;