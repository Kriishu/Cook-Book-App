import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";



function App() {
  return (
    <>
    <Navbar/>
    <RecipeList/>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;