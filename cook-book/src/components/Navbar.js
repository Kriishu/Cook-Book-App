import React from 'react'
import "./styles/Navbar.css"
import { useNavigate } from 'react-router-dom';


function NavBar() {

  const navigate = useNavigate();
  const createRecipe = () => {
    navigate('/create');
  };
  const home = () => {
    navigate('/');
  };
 

  return (
    <nav className="navbar">
      <div className="navbar-app-name" onClick={home}>Cook Book
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button className='Create-Recipe' onClick={createRecipe} >Create Recipe</button>
      </div>
     
    </nav>
  )
}

export default NavBar
