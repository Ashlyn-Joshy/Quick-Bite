import { restaurant_img } from "../constants.js";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  areaName,
  cuisines,
}) => {
  return (
    <div className="w-52  p-2 m-4 bg-white  rounded-lg  shadow-lg shadow-slate-100 ">
      <img
        alt="food"
        src={restaurant_img + cloudinaryImageId}
        className="rounded-lg"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Rating : {avgRating}</h4>
      <h5>location: {areaName}</h5>
    </div>
  );
};

export default RestaurantCard;
