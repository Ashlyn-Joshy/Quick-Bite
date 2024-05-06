import { restaurant_img } from "../constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/CartSlice";

const CartFoodItems = ({ items }) => {
  const dispatch = useDispatch();

  const removeFoodItem = (index) => {
    dispatch(removeItem(index));
  };
  return (
    <div className="w-10/12 mx-auto">
      {items.map((food, index) => (
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

          <div className="w-1/5 p-4 relative">
            <img
              className=" rounded w-full"
              alt="food"
              src={restaurant_img + food?.card?.info?.imageId}
            />
            <button
              className="bg-red-600 p-2 rounded absolute bottom-0 text-white"
              onClick={() => removeFoodItem(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartFoodItems;
