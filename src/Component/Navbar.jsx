
import React, { useState } from 'react';
import '../Style/navbar.css';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
  
    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
  
    return (
      <nav className={`navbar ${showSidebar ? 'active' : ''}`}>
        <div className="navbar-left">
          <img src="https://cinetechindia.com/wp-content/uploads/2022/04/cinetech-logo.png" alt="Logo" className="logo" />
        </div>
        <div className="navbar-center">
            <button className={`toggle-btn ${showSidebar ? 'active' : ''}`} onClick={toggleSidebar}>
            ☰
            </button>
          <ul className={`nav-list ${showSidebar ? 'active' : ''}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Skillsets</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-right">
        <p>
          <span role="img" aria-label="Telephone Icon">
            📞
          </span>{' '}
          91-20-26932103
            </p>
        </div>    
    </nav>
    );
  };

export default Navbar;





