import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions/cartActions';
import './CartItem.css';

const CartItem = ({ item, handleIncrease, handleDecrease }) => {
  // Use dispatch to interact with the Redux store
  const dispatch = useDispatch();

  // Return early if the item is missing or undefined
  if (!item) {
    console.error("Item is missing or undefined");
    return <div className="cart-item">Loading...</div>;
  }

  // Handle removal of an item from the cart
  const handleRemove = () => {
    try {
      dispatch(removeFromCart(item.id)); // Dispatch the removeFromCart action
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <div className="cart-item">
      {/* Display the product image or a default image if none is provided */}
      <img
        src={item.image || '/default-image.jpg'} // Default image for missing image URLs
        alt={item.title || 'Product'} // Fallback title if none is provided
        height="100"
        width="100"
      />
      
      <div className="cart-item-details">
        {/* Product title with fallback */}
        <h3>{item.title || 'Unknown Product'}</h3>
        
        {/* Product price */}
        <p>Price: ${item.price}</p>
        
        <div className="quantity-control">
          <label>Quantity:</label>
          {/* Button to decrease quantity */}
          <button className="quantity-button" onClick={() => handleDecrease(item.id)}>-</button>
          {/* Display quantity (defaults to 1 if not available) */}
          <span className="quantity-number">{item.quantity || 1}</span>
          {/* Button to increase quantity */}
          <button className="quantity-button" onClick={() => handleIncrease(item.id)}>+</button>
        </div>
        
        {/* Display total price for the item (price * quantity) */}
        <p>Total: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
        
        {/* Button to remove the item from the cart */}
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

// Prop validation using PropTypes
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleIncrease: PropTypes.func.isRequired, // Function to handle quantity increase
  handleDecrease: PropTypes.func.isRequired, // Function to handle quantity decrease
};

export default CartItem;
