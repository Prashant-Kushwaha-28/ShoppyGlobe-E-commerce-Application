// ProductList component displays a list of products and handles adding them to the cart
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, addToCart } from '../store/actions/cartActions'; // Import Redux actions
import './ProductList.css';

const ProductList = () => {
  // State for loading, error, and search query
  const [loading, setLoading] = useState(false); // For tracking loading state
  const [error, setError] = useState(''); // For tracking error state
  const [searchQuery, setSearchQuery] = useState(''); // For storing search input value

  // Redux hooks to access the cart items and products from the store
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items) || []; // Cart items from Redux store
  const products = useSelector(state => state.cart.products) || []; // Products from Redux store
  
  // Filter products based on search query (ensures products is always an array)
  const filteredProducts = Array.isArray(products)
    ? products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) // Filter products by title
      )
    : [];

  // Fetch products from API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Set loading to true when starting fetch
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(response.data)); // Dispatch action to set products in Redux store
      } catch (error) {
        console.error('Error fetching products:', error); // Log error if fetching fails
      } finally {
        setLoading(false); // Set loading to false after fetching completes
      }
    };

    fetchProducts(); // Call the fetchProducts function on mount
  }, [dispatch]);

  // Handler for adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch addToCart action
  };

  // Render loading or error message based on state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-list">
      <h1>Product List</h1>

      {/* Search input to filter products */}
      <div className="search-item-components">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          placeholder="Search products"
        />
      </div>

      <ul>
        {/* Display products if any are found after filtering */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} height="150" width="150" />
              <h2>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </h2>
              <p>Price: ${product.price}</p>

              {/* Only show the "Add to Cart" button if the product is not already in the cart */}
              {!cartItems.some(item => item.id === product.id) && (
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              )}
            </li>
          ))
        ) : (
          <p>No products found</p> // Display if no products match the search
        )}
      </ul>
    </div>
  );
};

export default ProductList;
