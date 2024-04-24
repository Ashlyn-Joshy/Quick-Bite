import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerEffect from "./ShimmerEffect";

const filterRestaurants = (searchValue, restaurants) => {
  const data = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return data;
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    apiCalling();
  }, []);

  const apiCalling = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0303222&lng=76.30728049999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (allRestaurants?.length === 0) return <ShimmerEffect />;
  if (filteredRestaurants.length === 0)
    return <h1>No Restaurant found {searchValue}</h1>;

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

      <div className="restaurant-data">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
