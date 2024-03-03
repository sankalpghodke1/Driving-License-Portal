import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const isSignin = useSelector((state) => state.isSignin);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-primary navbar-dark mb-3">
      <Link to="/" className="navbar-brand text-white">
      &nbsp;Driving License Portal
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-expanded={!collapsed}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active mr-2">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>

          <li className="nav-item mr-3">
            <Link to="/aboutus" className="nav-link text-white">
              About Us
            </Link>
          </li>

          <li className="nav-item mr-3">
            <Link to="/contactus" className="nav-link text-white">
              Contact Us
            </Link>
          </li>

          <li className="nav-item mr-3">
            <Link to="/chatbot" className="nav-link text-white">
              Chat with us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
