import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchResultComponent() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');
  const [searchResults, setSearchResults] = useState([]);
  const apiUrl = `https://jsonplaceholder.typicode.com/posts?title=${searchQuery}`;

  useEffect(() => {
    // Fetch search results from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.log(error));
  }, [searchQuery, apiUrl]);

  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>
      {searchResults.map((result) => (
        <div key={result.id}>Name : {result.title}
        <p>User Id : {result.userId}</p>
        <p>Description : {result.body}</p>
        </div>
        
      ))}
    </div>
  );
}

export default SearchResultComponent;
