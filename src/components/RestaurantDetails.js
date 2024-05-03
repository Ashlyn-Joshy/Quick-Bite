import { useParams, Link } from "react-router-dom";
import ShimmerEffect from "./ShimmerEffect";
import useRestaurantDetails from "../Hooks/useRestaurantDetails.js";
import { restaurant_img } from "../constants.js";
import useOnline from "../Hooks/useOnline.js";
import FoodCategory from "./FoodCategory.js";
import { useState } from "react";

const RestaurantDetails = () => {
  const [showIndex, setShowIndex] = useState(null);

  const isOnline = useOnline();
  if (!isOnline) return <h1>check the internet connection </h1>;

  const { id } = useParams();
  const restaurant = useRestaurantDetails(id);

  if (!restaurant) return <ShimmerEffect />;

  const {
    name,
    city,
    cloudinaryImageId,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
  } = restaurant?.cards[2]?.card?.card?.info;

  const categories =
    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="restaurant-details">
      <div className="flex mx-40 my-20 justify-center">
        <div className="w-52">
          <img alt="food" src={restaurant_img + cloudinaryImageId} />
        </div>
        <div className="m-10">
          <h1 className="font-mono font-bold text-3xl">{name}</h1>
          <h4 className="font-sans font-semibold text-xl">{city}</h4>
          <h2 className="font-semibold ">
            🌟{avgRating} ({totalRatingsString}) {costForTwoMessage}
          </h2>
          <h3 className="text-green-600 underline underline-offset-2 ">
            {cuisines.join(", ")}
          </h3>
        </div>
      </div>

      <div className="w-6/12 mx-auto ">
        {categories.map((c, index) => (
          <FoodCategory
            key={c?.card?.card?.title}
            data={c?.card?.card}
            showData={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>

      <div className="m-5">
        <button>
          <Link to={"/"} className="bg-green-600 text-white p-2 rounded">
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default RestaurantDetails;
