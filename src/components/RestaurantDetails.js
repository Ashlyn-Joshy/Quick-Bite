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
    <div className="restaurant-details m-5">
      <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img alt="food" src={restaurant_img + cloudinaryImageId} />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <h1 className="text-green-600 font-bold text-xl mb-2">{name}</h1>
            <h4 className="text-black font-semibold">{city}</h4>
            <h2 className="text-black font-semibold ">
              🌟{avgRating} ({totalRatingsString}) {costForTwoMessage}
            </h2>
            <h3 className="text-green-600 underline underline-2">
              {cuisines.join(", ")}
            </h3>
          </div>
        </div>
      </div>

      <div className="md:w-6/12 mx-auto ">
        {categories.map((c, index) => (
          <FoodCategory
            key={c?.card?.card?.title}
            data={c?.card?.card}
            showData={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>

      <div className="m-5 ">
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
