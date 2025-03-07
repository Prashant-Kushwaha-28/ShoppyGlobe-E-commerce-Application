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
      (acc, item) => acc + item.price * (item.quantity || 1), // Default quantity to 1 if missing
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  // Handle increase in item quantity
  const handleIncrease = (id) => {
    const item = cartItems.find((item) => item.id === id);
    const newQuantity = (item.quantity || 1) + 1; // Increment quantity by 1
    dispatch(updateCartQuantity(id, newQuantity)); // Dispatch action with updated quantity
  };

  // Handle decrease in item quantity
  const handleDecrease = (id) => {
    const item = cartItems.find((item) => item.id === id);
    const newQuantity = (item.quantity || 1) > 1 ? (item.quantity || 1) - 1 : 1; // Decrease quantity but not below 1
    dispatch(updateCartQuantity(id, newQuantity)); // Dispatch action with updated quantity
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
                key={item.id}
                item={item}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
              />
            ))}
          </ul>
          
          {/* Display total price of the items in the cart */}
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          
          {/* Link to the checkout page */}
          <Link to="/checkout">Checkout</Link>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
