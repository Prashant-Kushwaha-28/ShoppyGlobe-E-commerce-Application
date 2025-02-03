// NotFound component displays a 404 error message when a page is not found
import React from 'react';
import { Link } from 'react-router-dom'; // Link is used to navigate back to the Home page

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Main title for the 404 error */}
      <h1>404 - Page Not Found</h1>
      
      {/* Description for the 404 error */}
      <p>The page you are looking for does not exist.</p>
      
      {/* Link to navigate back to the Home page */}
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
