import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import RecipeDetails from "./components/pages/RecipeDetails";



function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recipe/:id" element={<RecipeDetails/>} />
        </Routes>
      </Router>
    </>
  );
}


export default App;