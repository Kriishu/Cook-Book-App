import React, { useContext } from 'react';
import { RecipeContext } from './context/RecipeContext';
import './RecipeStyle.css';
import { useNavigate } from 'react-router-dom';


function RecipeCard({ recipe }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <p>Cooking Time: {recipe.cookingTime} minutes</p>
      <p>{recipe.description}</p>
      <button className="cook-button" onClick={handleClick}>Cook This</button>
    </div>
  );
}

function RecipeList() {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
