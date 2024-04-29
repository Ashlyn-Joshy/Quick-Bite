import { useParams } from "react-router-dom";
import { restaurant_menu } from "../constants";
import { useEffect, useState } from "react";

import ShimmerEffect from "./ShimmerEffect";

const RestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState();
  const { id } = useParams();

  useEffect(() => {
    restaurant_info();
  }, []);

  const restaurant_info = async () => {
    const data = await fetch(restaurant_menu + id);
    const json = await data.json();
    setRestaurant(json.data);
  };

  if (!restaurant) return <ShimmerEffect />;

  return (
    <div className="restaurant-details">
      <h1>{restaurant?.cards[2]?.card?.card?.info?.name}</h1>
      <h4>{restaurant?.cards[2]?.card?.card?.info?.city}</h4>
      <div className="restaurant-info">
        <div className="restaurant-info-img">
          <img
            alt="food"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
          />
        </div>
        <dvi className="restaurant-info-data">
          <h2>
            ⭐{restaurant?.cards[2]?.card?.card?.info?.avgRating} (
            {restaurant?.cards[2]?.card?.card?.info?.totalRatingsString}) .{" "}
            {restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}
          </h2>
          <h3>{restaurant?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>
        </dvi>
      </div>
      <div>
        <h2>Menus details</h2>

        <h3>
          {
            restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card?.card?.title
          }
        </h3>
        <ul>
          {(restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map(
            (item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
