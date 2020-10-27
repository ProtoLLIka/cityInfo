import React from 'react';

import './styles/searchField.css';

const SearchField = () => {
  return (
    <div className="searchContainer">
      <input type="text" placeholder="Search.." className="search" />
    </div>
  );
};

export default SearchField;
