import React, { ChangeEvent } from "react";

import './style.css'

type Props = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const SearchBar: React.FC<Props> = ({ onChange, placeholder = "Search for an item..." }) => {
  return (
    <div className="search">
      <input
        type="search"
        className="search-input"
        onChange={onChange}
        placeholder={placeholder}
      />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default SearchBar;
