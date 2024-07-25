import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPostList from './BlogPostList';

const mockPosts = [
  {
    title: 'Post Title 1',
    description: 'Post Description 1',
    publishedAt: '2024-05-08T15:01:51Z',
    urlToImage: 'https://example.com/image1.jpg',
    url: 'https://example.com/post1'
  },
  {
    title: 'Post Title 2',
    description: 'Post Description 2',
    publishedAt: '2024-05-08T15:01:51Z',
    urlToImage: 'https://example.com/image2.jpg',
    url: 'https://example.com/post2'
  }
];

test('renders blog post list', () => {
  render(<BlogPostList posts={mockPosts} onPageChange={() => { }} currentPage={1} totalPages={1} />);

  // Check if posts are rendered
  expect(screen.getByText('Post Title 1')).toBeInTheDocument();
  expect(screen.getByText('Post Description 1')).toBeInTheDocument();
  expect(screen.getByText('Post Title 2')).toBeInTheDocument();
  expect(screen.getByText('Post Description 2')).toBeInTheDocument();
});
