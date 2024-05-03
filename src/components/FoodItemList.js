import { restaurant_img } from "../constants";
const FoodItemList = ({ items }) => {
  return (
    <>
      <div className="m-auto">
        {items.map((food) => (
          <div
            key={food?.card?.info?.id}
            className="m-4 border-b p-2 flex justify-between"
          >
            <div>
              <span className="font-bold flex">{food?.card?.info?.name}</span>
              <span className="font-semibold">
                ₹{" "}
                {food?.card?.info?.price
                  ? food?.card?.info?.price / 100
                  : food?.card?.info?.defaultPrice / 100}
              </span>
              <p className="py-2 text-xs">{food?.card?.info?.description}</p>
            </div>

            <div className="w-1/2 p-4 relative">
              <img
                className=" rounded w-full"
                alt="food"
                src={restaurant_img + food?.card?.info?.imageId}
              />
              <button className="bg-green-600 text-white p-2 rounded absolute bottom-0">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodItemList;
