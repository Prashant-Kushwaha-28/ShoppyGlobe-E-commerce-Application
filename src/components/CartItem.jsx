import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions/cartActions';
import './CartItem.css';

const CartItem = ({ item, handleIncrease, handleDecrease }) => {
  const dispatch = useDispatch();

  if (!item) {
    console.error("Item is missing or undefined");
    return <div className="cart-item">Loading...</div>;
  }

  const handleRemove = () => {
    try {
      dispatch(removeFromCart(item.id));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Ensure the product image is from item.images[0], fallback to a default image if not available
  const productImage = item.images && item.images.length > 0 ? item.images[0] : '/default-image.jpg'; 

  return (
    <div className="cart-item">
      {/* Display the product image */}
      <img
        src={productImage} // Use images[0] if available
        alt={item.title || 'Product'} // Fallback title if none is provided
        height="100"
        width="100"
      />
      
      <div className="cart-item-details">
        {/* Display product title */}
        <h3>{item.title || 'Unknown Product'}</h3>
        
        {/* Display product price */}
        <p>Price: ${item.price}</p>
        
        <div className="quantity-control">
          <label>Quantity:</label>
          <button className="quantity-button" onClick={() => handleDecrease(item.id)}>-</button>
          <span className="quantity-number">{item.quantity || 1}</span>
          <button className="quantity-button" onClick={() => handleIncrease(item.id)}>+</button>
        </div>
        
        {/* Display total price for the item (price * quantity) */}
        <p>Total: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
        
        {/* Remove button */}
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

// Prop validation
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string), // Ensure the images are an array of strings
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
};

export default CartItem;
