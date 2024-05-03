import { useState } from "react";
import { filterRestaurants } from "../Utils/helpers.js";

const Search = ({ allRestaurants, setFilteredRestaurants }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className=" m-5 h-40  flex ">
      <div className="m-6">
        <h1 className=" font-extrabold text-5xl text-green-600">
          Find restaurants near you...
        </h1>
      </div>

      <div className="w-1/2 m-12">
        <input
          type="text"
          placeholder="Search"
          className=" w-10/12 outline outline-2 h-10 outline-gray-100"
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
