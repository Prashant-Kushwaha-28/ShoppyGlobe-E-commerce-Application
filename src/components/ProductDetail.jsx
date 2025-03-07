import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';
import api from './axios';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL params
  const [product, setProduct] = useState(null); // State to store the fetched product data
  const [loading, setLoading] = useState(false); // State to track the loading status
  const [error, setError] = useState(null); // State to store error messages

  // Fetch product details when the component mounts or when the product ID changes
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Set loading to true while fetching data
      try {
        console.log("Product ID:",id);
        // Make an API call to fetch product details by ID
        const response = await api.get(`/products/${id}`);
        console.log(response.data); // Log the response for debugging
        if (response.data) {
          setProduct(response.data); // Store product data if the response is valid
        } else {
          setError('Product not found'); // Handle case where the product is not found
        }
      } catch (error) {
        setError('Failed to load product. Please try again.'); // Handle errors in fetching
      } finally {
        setLoading(false); // Set loading to false after the fetch completes
      }
    };

    fetchProduct(); // Call the fetchProduct function when component mounts or ID changes
  }, [id]); // Dependency array to re-run the effect if the ID changes

  // Show loading state while the product is being fetched
  if (loading) return <div className="loading">Loading product details...</div>;

  // Show error message if fetching fails
  if (error) return <div className="error">{error}</div>;

  // Show a fallback message if no product is found
  if (!product) return <div className="not-found">No product found</div>;

  return (
    <div className="product-detail">
      {/* Display the product title, or a fallback if it's unavailable */}
      <h2>{product.title || 'No title available'}</h2>

      {/* Display the product price, formatted to two decimal places, or show "N/A" if missing */}
      <p>Price: ${product.price ? product.price.toFixed(2) : 'N/A'}</p>

      {/* Display the product description, or a fallback if it's unavailable */}
      <p>{product.description || 'No description available'}</p>

      {/* Display the product image with fallback if not available */}
      {product.images && product.images[0] ? (
        <img
          src={product.images[0]} // Use images[0] as in the ProductList component
          alt={product.title}
          className="product-image"
        />
      ) : (
        <div className="image-placeholder">
          <p>No image available</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
