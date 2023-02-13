import React, { createContext, useState } from 'react';
import recipes from '../recipes.json';

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [allRecipes, setRecipes] = useState(recipes);

  return (
    <RecipeContext.Provider value={{ recipes: allRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
}
