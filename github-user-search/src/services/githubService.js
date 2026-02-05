import axios from 'axios';

const SEARCH_URL = 'https://api.github.com/search/users';

export const fetchAdvancedUsers = async (username, location, minRepos) => {
  try {
    let query = '';
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${SEARCH_URL}?q=${query.trim()}`, {
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
