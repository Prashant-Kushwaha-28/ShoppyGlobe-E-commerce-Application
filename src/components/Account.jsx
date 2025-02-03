import React, { useState } from 'react';

const Account = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [accountCreated, setAccountCreated] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setAccountCreated(true);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Create Account</h1>
      {accountCreated ? (
        <p style={{ color: 'green' }}>✅ Account created successfully!</p>
      ) : (
        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div>
            <label style={{ fontWeight: '500' }}>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label style={{ fontWeight: '500' }}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label style={{ fontWeight: '500' }}>Password:</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ marginLeft: '10px', background: 'transparent', border: 'none' }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div>
            <label style={{ fontWeight: '500' }}>Confirm Password:</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ marginLeft: '10px', background: 'transparent', border: 'none' }}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Create Account
          </button>
        </form>
      )}

      {/* ✅ Entered Data Show Karne Ke Liye Ye Part Add Kiya */}
      {!accountCreated && (
        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Entered Data</h2>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Password:</strong> {formData.password}</p>
          <p><strong>Confirm Password:</strong> {formData.confirmPassword}</p>
        </div>
      )}
    </div>
  );
};

export default Account;
