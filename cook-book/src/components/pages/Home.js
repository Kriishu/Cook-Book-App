import React from "react";
import "../../App.css";
import { RecipeProvider } from "../context/RecipeContext";
import RecipeList from "../RecipeList";


function Home() {
  return (
    <>
    <RecipeProvider>
    <RecipeList/>
    </RecipeProvider>
    </>
  );
}

export default Home;