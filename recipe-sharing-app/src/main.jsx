import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import RecipeDetails from './components/RecipeDetails';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
    </Routes>
  </BrowserRouter>
);

// Wrapper to extract recipeId from URL
function RecipeDetailsWrapper() {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
}
