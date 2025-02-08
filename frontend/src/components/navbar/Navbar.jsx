import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      {/* Left side of the navbar */}
      <div className="navbar-start">
        <span className="brand">Easy Buy</span>
      </div>

      {/* Centered Links */}
      <div className="navbar-links">
        <a href="/Favorites" className="navbar-link">Favorites</a>
        <a href="/aboutus" className="navbar-link">About Us</a>
      </div>

      {/* Right side of the navbar (User dropdown) */}
      <div className="navbar-end">
        <div className="dropdown">
          <button className="btn">
            <FaUser className="icon" />
          </button>
          <ul className="menu">
            <li>
              <a href="/profile" onClick={handleProfileClick} className="menu-item">
                Profile
              </a>
            </li>
            <li>
              <button className="menu-item logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
