import * as actionTypes from './actionTypes'; // Ensure correct path to actionTypes.js

export const addToCart = (product) => {
  if (!product || !product.id) {
    console.error("Invalid product in addToCart:", product);
    return { type: actionTypes.ADD_TO_CART, payload: null }; // Avoid dispatching invalid data
  }

  return { 
    type: actionTypes.ADD_TO_CART, 
    payload: { id: product.id, quantity: 1, ...product } // Ensure consistent payload structure
  };
};

export const removeFromCart = (productId) => {
  if (!productId) {
    console.error("Invalid productId in removeFromCart:", productId);
    return { type: actionTypes.REMOVE_FROM_CART, payload: null }; // Avoid dispatching invalid data
  }

  return { type: actionTypes.REMOVE_FROM_CART, payload: productId };
};

export const updateCartQuantity = (id, quantity) => {
  if (!id || quantity < 1) {
    console.error("Invalid data in updateCartQuantity:", { id, quantity });
    return { type: actionTypes.UPDATE_CART_QUANTITY, payload: null }; // Avoid dispatching invalid data
  }

  return { 
    type: actionTypes.UPDATE_CART_QUANTITY, 
    payload: { id, quantity } 
  };
};

export const setProducts = (productsData) => {
  if (!productsData || !Array.isArray(productsData.products)) {
    console.error("Invalid products array:", productsData);
    return { type: actionTypes.SET_PRODUCTS, payload: [] }; // Default to empty array if invalid
  }

  return {
    type: actionTypes.SET_PRODUCTS,
    payload: productsData.products, // ✅ Fix: Pass products array instead of whole object
  };
};

