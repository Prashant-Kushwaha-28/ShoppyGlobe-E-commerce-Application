import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login successful:", data);

      // Store token securely
      if (data.token) {
        localStorage.setItem("token", data.token);
      } else {
        throw new Error("Token missing from response");
      }

      // Redirect user after successful login
      window.location.href = "/";
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "320px", margin: "auto", textAlign: "center", padding: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
      <h2 style={{ color: "#333" }}>Login</h2>
      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: loading ? "#ccc" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "16px",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
