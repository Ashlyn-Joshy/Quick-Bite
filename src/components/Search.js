import { useState } from "react";
import { filterRestaurants } from "../Utils/helpers.js";

const Search = ({ allRestaurants, setFilteredRestaurants }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className=" m-5 md:h-40 h-25  md:flex md:justify-between ">
      <div className="m-6 ">
        <h1 className=" font-extrabold md:text-5xl text-xl text-green-600">
          Find restaurants near you...
        </h1>
      </div>

      <div className="md:flex-grow md:m-12">
        <input
          type="text"
          placeholder="Search"
          className=" md:w-1/2 outline outline-2 h-10 outline-gray-100"
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
          className="h-11 bg-green-600  px-2 text-white"
          onClick={() => {
            const data = filterRestaurants(searchValue, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
