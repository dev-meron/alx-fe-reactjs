import axios from 'axios';

// Base URLs
const USER_URL = 'https://api.github.com/users';
const SEARCH_URL = 'https://api.github.com/search/users?q';

// Fetch a single user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${USER_URL}/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY || ''}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Advanced search with query parameters
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    let query = '';
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${SEARCH_URL}${query.trim()}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY || ''}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching advanced users:', error);
    throw error;
  }
};
