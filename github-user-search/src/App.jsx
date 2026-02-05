import React from 'react';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>GitHub User Search</h1>
      <SearchBar />
      {/* Results will be displayed here later */}
    </div>
  );
}

export default App;
