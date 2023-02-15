import React, { useContext, useState, useEffect, createContext } from "react";

const RecipeContext = createContext();

export function RecipeContextProvider({ children }) {
  const [ recipes, setRecipes ] = useState([]);
  const [ isPending, setIsPending ] =  useState(false);
  const [ url, setUrl ] = useState('http://localhost:3000/recipes/')

  const [query, setQuery] = useState("")

  useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setRecipes(data);
            })
  }, [isPending]);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        url,
        setUrl,
        isPending,
        setIsPending,
        query,
        setQuery
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}