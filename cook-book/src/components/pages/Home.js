import React from "react";
import "../styles/App.css";
import RecipeList from "../RecipeList";



function Home() {
  
  return (
    <>
     
      <div className="App">
        <RecipeList />
      </div>
   
    </>
  );
}

export default Home;