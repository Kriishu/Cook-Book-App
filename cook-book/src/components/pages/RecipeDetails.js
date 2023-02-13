import Recipes from "../recipes.json"
import React from 'react';
import { useParams } from "react-router-dom";
import "../RecipeDetails.css"

function RecipeDetails() {


  const { id } = useParams();
  const recipe = Recipes.find(recipe => recipe.id === Number(id));
  


  return (
    <div className="recipe-details">
       <h1>Cook: {recipe.name}</h1>
       <p>Time to cook: {recipe.cookingTime} Minutes</p>
       <p>description: {recipe.description}</p>

    </div>
  )
}

export default RecipeDetails
