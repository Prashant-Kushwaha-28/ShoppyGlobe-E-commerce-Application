import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, addToCart } from "../store/actions/cartActions";
import api from "./axios"; // Import global axios instance
import "./ProductList.css";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];
  const products = useSelector((state) => state.cart.products) || [];

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
  
      try {
        const response = await api.get("/products"); // No need to add token manually
        console.log("API Response:", response.data); // ✅ Check API Response
        dispatch(setProducts(response.data)); 
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="search-item-components">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products"
        />
        {searchQuery && <button onClick={() => setSearchQuery("")} className="clear-search">Clear</button>}
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product._id}>
            <img src={product.images} alt={product.title} className="product-image" />
            <h2><Link to={`/products/${product._id}`}>{product.title}</Link></h2>
            <p>Price: ${product.price}</p>
            {!cartItems.some((item) => item._id === product._id) ? (
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            ) : (
              <button disabled>Already in Cart</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;