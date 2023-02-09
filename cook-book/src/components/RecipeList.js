import React from 'react';
import recipes from './recipes.json';
import './RecipeStyle.css';

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <p>Cooking Time: {recipe.cookingTime} minutes</p>
      <p>{recipe.description}</p>
      <button className="cook-button">Cook This</button>
    </div>
  );
}

function RecipeList() {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
