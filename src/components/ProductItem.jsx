// ProductItem component displays a single product with details and an "Add to Cart" button
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ product, isInCart, handleAddToCart }) => {
  return (
    <div className="product-item">
      {/* Link to navigate to the product detail page */}
      <Link to={`/products/${product.id}`}>
        {/* Product image with styling to ensure it's properly fitted */}
        <img
          src={product.image}
          alt={product.title}
          height="150px"
          width="150px"
          style={{ objectFit: 'cover' }} // Ensures image covers the area without distortion
        />

        {/* Product title - Truncated if longer than 20 characters */}
        <h2>
          {product.title.length > 20 
            ? `${product.title.substring(0, 20)}...`  // Truncate long titles
            : product.title}
        </h2>

        {/* Product price formatted to two decimal places */}
        <p>Price: ${product.price.toFixed(2)}</p>

        {/* Product quantity, default to "In Stock" if not provided */}
        <p>Quantity: {product.quantity || 'In Stock'}</p>
      </Link>

      {/* Show "Add to Cart" button only if the product is not in the cart */}
      {!isInCart && (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductItem;
