/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";
import searchImg from "../assets/search.png";
function Search({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleOnChangeValue = (event) => {
    setSearch(event.target.value)
    onSearch(event.target.value);
  };
  console.log(search);

  return (
    <div className="searchForm">
      <label className="label-search">Country Catalog</label>
      <div className="search-wrapper">
        <img src={searchImg} className="search-img" />
        <input
          className="input-search"
          type="text"
          placeholder="Search Countries"
          value={search}
          onChange={handleOnChangeValue}
        />
      </div>
    </div>
  );
}

export default Search;
