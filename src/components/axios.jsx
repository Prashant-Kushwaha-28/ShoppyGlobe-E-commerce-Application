// Create Axios Instance
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });
  
  // Attach Access Token Automatically
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  // Handle Unauthorized Access (401 Error)
  api.interceptors.response.use(
    (response) => response, // If response is successful, return it
    async (error) => {
      if (error.response && error.response.status === 401) {
        console.error(" Unauthorized! Redirecting to login...");
        
        // Remove expired token
        localStorage.removeItem("token");
  
        // Redirect to login
        setTimeout(() => {
          window.location.href = "/login"; 
        }, 500); // Small delay for smooth experience
      }
      
      return Promise.reject(error);
    }
  );
  
  export default api;