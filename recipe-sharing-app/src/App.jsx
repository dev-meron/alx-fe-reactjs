import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* Home route: shows search, add form, and recipe list */}
          <Route
            path="/"
            element={
              <div>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </div>
            }
          />

          {/* Recipe details route: shows individual recipe */}
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to extract recipeId from URL
import { useParams } from 'react-router-dom';
function RecipeDetailsWrapper() {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
}

export default App;
