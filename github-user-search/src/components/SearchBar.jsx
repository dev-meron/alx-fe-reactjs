import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
    // Later: call GitHub API service
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
