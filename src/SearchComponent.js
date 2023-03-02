import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function SearchComponent() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get('search-query');
    setSearchParams({ q: query });
    navigate(`/search?q=${query}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type='text' name='search-query' placeholder='Search' />
        <button type="submit"> Search</button>
      </form>
      <p>Type " enim quo cumque " (or) " non est facere " </p>
    </div>
  );
}

export default SearchComponent;
