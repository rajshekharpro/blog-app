// src/services/newsApi.js
import axios from 'axios';

const API_KEY = '264e797c93ed43a4893315a383dc64cb';
const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        apiKey: API_KEY,
        ...params
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};

export const getArticleDetails = async (url) => {
  try {
    // NewsAPI does not provide full article content, so this will need to fetch the article's content directly
    return { url }; // Placeholder - fetching full content requires additional logic
  } catch (error) {
    console.error('Error fetching article details:', error);
    throw error;
  }
};