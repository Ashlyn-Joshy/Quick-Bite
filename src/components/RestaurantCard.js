import { restaurant_img } from "../constants.js";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  areaName,
  cuisines,
  costForTwo,
  sla,
}) => {
  return (
    <div className="w-52  p-2 m-4 bg-white  rounded-lg  shadow-lg shadow-slate-100 ">
      <img
        alt="food"
        src={restaurant_img + cloudinaryImageId}
        className="rounded-lg"
      />
      <h1 className=" font-bold pt-3 ">{name}</h1>
      <h2 className="font-semibold">
        ⭐{avgRating} . {sla.slaString}
      </h2>
      <h3 className="text-gray-500 text-sm ">{cuisines.join(", ")}</h3>
      <h5 className="text-gray-500 text-sm">{areaName}</h5>
    </div>
  );
};

export default RestaurantCard;
