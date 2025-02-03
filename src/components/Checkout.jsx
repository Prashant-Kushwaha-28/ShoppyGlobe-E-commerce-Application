// Checkout component handles the checkout process where users can fill in their details and place an order.
import { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  // Form state to hold name, email, and address
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: ''
  });

  // State for tracking if the order has been placed, loading state, and errors
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handles form field changes and updates the respective field in the form state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value.trim() });
  };

  // Validates the form fields before submitting the order
  const validateForm = () => {
    if (!form.name || !form.email || !form.address) return 'All fields are required';
    if (!/\S+@\S+\.\S+/.test(form.email)) return 'Please enter a valid email';
    return null;
  };

  // Handles the form submission, validates the form, and simulates an API call to place the order
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formError = validateForm();
    if (formError) {
      setError(formError); // Show error if validation fails
      return;
    }

    setError(null); // Reset error
    setLoading(true); // Set loading state to true while placing the order

    // ✅ Simulate a fake API response with a 2-second delay
    setTimeout(() => {
      console.log("Order Placed Successfully!");
      setOrderPlaced(true); // Set orderPlaced to true after the order is placed
      setLoading(false); // Reset loading state
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      
      {/* Display success message if the order is placed */}
      {orderPlaced ? (
        <p className="success-message">Order placed successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          {/* Name field */}
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              disabled={loading} // Disable input when loading
            />
          </div>

          {/* Email field */}
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              disabled={loading} // Disable input when loading
            />
          </div>

          {/* Address field */}
          <div className="form-group">
            <label>Address:</label>
            <input 
              type="text" 
              name="address" 
              value={form.address} 
              onChange={handleChange} 
              disabled={loading} // Disable input when loading
            />
          </div>

          {/* Submit button with dynamic text based on loading state */}
          <button type="submit" disabled={loading} className="submit-button">
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>

          {/* Display error message if form validation fails */}
          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Checkout;
