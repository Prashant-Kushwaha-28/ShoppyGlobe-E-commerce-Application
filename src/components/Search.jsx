import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/search?q=${searchTerm}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchSearchResults();
    }, 500);

    return () => clearTimeout(debounceTimer); // Clean up timeout on component unmount or searchTerm change
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input 
        type="search" 
        value={searchTerm} 
        onChange={handleSearch} 
        placeholder="Search for products..." 
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
