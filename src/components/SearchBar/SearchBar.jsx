import React, { useState } from 'react';
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch, className }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
    setSearchText('');
  };

  return (
    <div className={`${styles["search-container"]} ${className}`}>
      <input
        className={`${styles["search-input"]} search-input`}
        type="search"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Buscar personaje"
      />
      <button
        className={`${styles["search-button"]} search-button`}
        onClick={handleSearch}
      >
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
