import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, addToCart } from "../store/actions/cartActions"; // Import Redux actions
import "./ProductList.css";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Error state
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];
  const products = useSelector((state) => state.cart.products) || [];

  // Filter products based on search query
  const filteredProducts = Array.isArray(products)
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Fetch products from DummyJSON API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(""); // Reset error on new fetch
      try {
        const response = await axios.get("https://dummyjson.com/products");
        dispatch(setProducts(response.data)); // Pass entire response object (Fix inside action)
      } catch (error) {
        setError("Error fetching products. Please try again later."); // Set error if fetching fails
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);

  // Handler for adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) return <div className="loading">Loading products...</div>; // Custom loading UI
  if (error) return <div className="error">{error}</div>; // Display error message

  return (
    <div className="product-list">
      <h1>Product List</h1>

      {/* Search input */}
      <div className="search-item-components">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")} className="clear-search">
            Clear
          </button>
        )}
      </div>

      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id}>
              <img
                src={product.images[0]}
                alt={product.title}
                className="product-image"
              />
              <h2>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </h2>
              <p>Price: ${product.price}</p>

              {!cartItems.some((item) => item.id === product.id) ? (
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              ) : (
                <button disabled>Already in Cart</button>
              )}
            </li>
          ))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
