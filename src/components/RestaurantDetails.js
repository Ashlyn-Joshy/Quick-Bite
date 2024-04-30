import { useParams } from "react-router-dom";
import ShimmerEffect from "./ShimmerEffect";
import useRestaurantDetails from "../Hooks/useRestaurantDetails.js";
import { restaurant_img } from "../constants.js";
import useOnline from "../Hooks/useOnline.js";

const RestaurantDetails = () => {
  const isOnline = useOnline();
  if (!isOnline) return <h1>check the internet connection </h1>;

  const { id } = useParams();
  const restaurant = useRestaurantDetails(id);

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
              restaurant_img +
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
