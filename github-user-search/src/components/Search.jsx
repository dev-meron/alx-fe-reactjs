import React, { useState } from 'react';
import { fetchUserData, fetchAdvancedUsers } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(query);   // ✅ now using fetchUserData
      setUser(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchAdvancedUsers(query, location, minRepos);
      setUsers(data.items || []);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Basic search form */}
      <form onSubmit={handleBasicSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded flex-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Basic Search
        </button>
      </form>

      {/* Advanced search form */}
      <form onSubmit={handleAdvancedSearch} className="flex flex-col gap-4 bg-gray-100 p-4 rounded shadow">
        <input
          type="text"
          placeholder="GitHub username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories..."
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Advanced Search
        </button>
      </form>

      {/* Results */}
      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      {user && (
        <div className="mt-6 p-4 border rounded shadow">
          <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
          <h2 className="text-lg font-bold">{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            View Profile
          </a>
        </div>
      )}

      <div className="mt-6 space-y-4">
        {users.map((u) => (
          <div key={u.id} className="flex items-center gap-4 p-4 border rounded shadow">
            <img src={u.avatar_url} alt={u.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-lg font-bold">{u.login}</h2>
              <a href={u.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
