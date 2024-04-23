import RestaurantCard from "./RestaurantCard";
import { dataOfRestaurants } from "../constants";
import { useState } from "react";

const filterRestaurants = (searchValue, restaurants) => {
  const data = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchValue)
  );
  return data;
};
const Body = () => {
  const [restaurants, setRestaurants] = useState(dataOfRestaurants);
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
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
            const data = filterRestaurants(searchValue, restaurants);
            setRestaurants(data);
          }}
        />
        <button
          className="SearchButton"
          onClick={() => {
            const data = filterRestaurants(searchValue, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-data">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
