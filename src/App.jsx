import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Router and Routes to handle routing
import ProductList from './components/ProductList'; // Import components for different routes
import Header from './components/Header';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import Account from './components/Account';
import NotFound from './components/NotFound';
import { useSelector, useDispatch } from 'react-redux'; // Redux hooks for managing state
import Search from './components/Search'; // Import the Search component
import { Provider } from 'react-redux'; // To provide Redux store to the app
import store from './store/store'; // Import the store

// Main App component
function App() {
  const cart = useSelector((state) => state.cart); // Retrieve cart state using Redux hook
  const dispatch = useDispatch(); // Use dispatch to dispatch actions

  return (
    <Router> {/* The Router component to manage routing */}
      <Header /> {/* Render Header on every page */}
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<ProductList />} /> {/* Default route to show ProductList */}
        <Route path="/cart" element={<Cart />} /> {/* Route for Cart page */}
        <Route path="/checkout" element={<Checkout />} /> {/* Route for Checkout page */}
        <Route path="/products/:id" element={<ProductDetail />} /> {/* Dynamic route for ProductDetail page */}
        <Route path="/search" element={<Search />} /> {/* Add Search route */}
        <Route path="/account" element={<Account />} /> {/* Route for Account page */}
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 page */}
      </Routes>
    </Router>
  );
}

export default App; 
