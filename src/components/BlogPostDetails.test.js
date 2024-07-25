import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlogPostDetails from './BlogPostDetails';

const mockPosts = [
  {
    title: 'Post Title',
    description: 'Post Description',
    publishedAt: '2024-05-08T15:01:51Z',
    urlToImage: 'https://example.com/image.jpg',
    url: 'https://example.com/post'
  }
];

test('renders blog post details', () => {
  render(
    <MemoryRouter initialEntries={['/post/https://example.com/post']}>
      <Routes>
        <Route path="/post/:id" element={<BlogPostDetails posts={mockPosts} />} />
      </Routes>
    </MemoryRouter>
  );
  
  // Check if post details are rendered
  expect(screen.getByText('Post Title')).toBeInTheDocument();
  expect(screen.getByText('Post Description')).toBeInTheDocument();
});
