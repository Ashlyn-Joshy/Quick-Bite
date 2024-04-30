import { useState, useEffect } from "react";
import { restaurant_api } from "../constants.js";
const useRestaurantDataBody = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    apiCalling();
  }, []);

  const apiCalling = async () => {
    const data = await fetch(restaurant_api);
    const json = await data.json();
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return [
    allRestaurants,
    filteredRestaurants,
    searchValue,
    setFilteredRestaurants,
  ];
};
export default useRestaurantDataBody;
