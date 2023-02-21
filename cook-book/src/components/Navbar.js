import React from 'react'
import "./styles/Navbar.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { setQuery } from './redux/slices/querySlice';

function NavBar() {

  const navigate = useNavigate();
  const createRecipe = () => {
    navigate('/create');
  };
  const home = () => {
    navigate('/');
  };


const dispatch = useDispatch()
 

  return (
    <nav className="navbar">
      <div className="navbar-app-name" onClick={home}>Cook Book
      </div>
      <div className="navbar-search">
      <input placeholder="Find a recipe" onChange={(e) => dispatch(setQuery(e.target.value))}></input>
      <button className='Create-Recipe' onClick={createRecipe} >Create Recipe</button>
      </div>
     
    </nav>
  )
}

export default NavBar
