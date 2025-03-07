import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api"); // ✅ Fixed URL
        setProducts(response.data); // ✅ Pass response.data directly
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProductList;
