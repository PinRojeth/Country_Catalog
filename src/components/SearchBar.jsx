/* eslint-disable react/prop-types */
import "../App.css";
import searchImg from "../assets/search.png";
function Search({ onSearch }) {

  const handleOnChangeValue = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="searchForm">
      <label className="label">Country Catalog</label>
      <div className="search-wrapper">
        <img src={searchImg} className="search-img" />
        <input
          className="input-search"
          type="text"
          placeholder="Search Countries"
          value={event?.target?.value}
          onChange={handleOnChangeValue}
        />
      </div>
    </div>
  );
}

export default Search;
