import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../redux/CartSlice";
import CartFoodItems from "./CartFoodItems";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const removeAllItems = () => {
    dispatch(clearItems());
  };

  return (
    <div className="m-5">
      {cartItems.length === 0 ? (
        <h1 className="text-center font-bold">Add Items to the cart</h1>
      ) : (
        <div>
          <button
            className="bg-green-600 p-2 rounded m-4 text-white hover:text-green-600 hover:bg-transparent outline outline-2 outline-green-600"
            onClick={removeAllItems}
          >
            Clear All Items
          </button>
          <div>
            <CartFoodItems items={cartItems} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
