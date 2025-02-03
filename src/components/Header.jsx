// Header component for ShoppyGlobe - displays the navigation menu
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // useLocation hook is used to get the current path to highlight active menu items
  const location = useLocation(); 

  // Define navigation items with label and path for routing
  const navigationItems = [
    { label: 'Home', path: '/' }, // Home route
    { label: 'Cart', path: '/cart' }, // Cart route
    // { label: 'Search', path: '/search' }, // Search route (commented out for now)
    { label: 'Account', path: '/account' }, // Account route
  ];

  return (
    <header>
      {/* Header title */}
      <h1>ShoppyGlobe</h1>

      {/* Navigation menu */}
      <nav>
        <ul>
          {/* Iterate through navigationItems to generate list of links */}
          {navigationItems.map((item, index) => (
            <li 
              key={index} 
              className={location.pathname === item.path ? 'active' : ''} // Apply 'active' class if the current path matches
            >
              {/* Link to navigate to the respective route */}
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
