import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPostItem from './BlogPostItem';

const mockPost = {
  title: 'Post Title',
  description: 'Post Description',
  publishedAt: '2024-05-08T15:01:51Z',
  urlToImage: 'https://example.com/image.jpg',
  url: 'https://example.com/post'
};

test('renders blog post item', () => {
  render(<BlogPostItem post={mockPost} />);
  
  // Check if post details are rendered
  expect(screen.getByText('Post Title')).toBeInTheDocument();
  expect(screen.getByText('Post Description')).toBeInTheDocument();
});
