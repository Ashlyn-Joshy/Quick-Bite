import { useState } from "react";
import { filterRestaurants } from "../Utils/helpers.js";

const Search = ({ allRestaurants, setFilteredRestaurants }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="SearchContainer">
      <input
        type="text"
        placeholder="Search"
        className="SearchInput"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyUp={() => {
          const data = filterRestaurants(searchValue, allRestaurants);
          setFilteredRestaurants(data);
        }}
      />
      <button
        className="SearchButton"
        onClick={() => {
          const data = filterRestaurants(searchValue, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
