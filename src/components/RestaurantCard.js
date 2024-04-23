const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  areaName,
  cuisines,
}) => {
  return (
    <div className="restaurant">
      <img
        alt="food"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Rating : {avgRating}</h4>
      <h5>location: {areaName}</h5>
    </div>
  );
};

export default RestaurantCard;
