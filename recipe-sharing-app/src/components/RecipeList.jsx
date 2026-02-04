import { useRecipeStore } from '../recipestore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes match your search.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
