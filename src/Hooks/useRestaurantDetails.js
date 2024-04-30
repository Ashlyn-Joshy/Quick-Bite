import { useEffect, useState } from "react";
import { restaurant_menu } from "../constants.js";
const useRestaurantDetails = (id) => {
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    restaurant_info();
  }, []);

  const restaurant_info = async () => {
    const data = await fetch(restaurant_menu + id);
    const json = await data.json();
    setRestaurant(json.data);
  };

  return restaurant;
};

export default useRestaurantDetails;
