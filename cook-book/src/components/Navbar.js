import React from 'react';
import './Navbar.css';


const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-app-name">Cook Book
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button className='Create-Recipe'>Create Recipe</button>
      </div>
     
    </nav>
  );
};


export default Navbar;
