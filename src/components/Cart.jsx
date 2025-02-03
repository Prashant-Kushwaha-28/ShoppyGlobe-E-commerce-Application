import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../store/actions/cartActions";
import CartItem from "./CartItem"; // Importing the CartItem component for each cart item
import "./Cart.css";

const Cart = () => {
  // Get the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items || []);
  
  // Dispatch function to trigger Redux actions
  const dispatch = useDispatch();
  
  // State to store the total price of the cart
  const [totalPrice, setTotalPrice] = useState(0);

  // Update the total price whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1), // Default quantity to 1 if not available
      0
    );
    setTotalPrice(total); // Set the calculated total price
  }, [cartItems]);

  // Handle increase in item quantity
  const handleIncrease = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(updateCartQuantity(id, item.quantity + 1)); // Update quantity by 1
    }
  };

  // Handle decrease in item quantity
  const handleDecrease = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateCartQuantity(id, item.quantity - 1)); // Decrease quantity by 1
    }
  };

  return (
    <div>
      <h1>Cart</h1>
      {/* Check if there are items in the cart */}
      {cartItems.length > 0 ? (
        <>
          <ul>
            {/* Map through cart items and render each CartItem */}
            {cartItems.map((item) => (
              <CartItem
                key={item.id} // Unique key for each CartItem
                item={item} // Pass the cart item data to CartItem
                handleIncrease={handleIncrease} // Pass the increase handler function
                handleDecrease={handleDecrease} // Pass the decrease handler function
              />
            ))}
          </ul>
          
          {/* Display total price of the items in the cart */}
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          
          {/* Link to the checkout page */}
          <Link to="/checkout">Checkout</Link>
        </>
      ) : (
        // Message when the cart is empty
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
