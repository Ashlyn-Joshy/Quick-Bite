import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerEffect from "./ShimmerEffect";
import Search from "./Search.js";
import useRestaurantDataBody from "../Hooks/useRestaurantDataBody.js";
import useOnline from "../Hooks/useOnline.js";
const Body = () => {
  const [
    allRestaurants,
    filteredRestaurants,
    searchValue,
    setFilteredRestaurants,
  ] = useRestaurantDataBody();

  const isOnline = useOnline();
  if (!isOnline) return <h1>No Internet Connection</h1>;

  if (allRestaurants?.length === 0) return <ShimmerEffect />;
  if (filteredRestaurants.length === 0)
    return <h1>No Restaurant found {searchValue}</h1>;

  return (
    <>
      <Search
        allRestaurants={allRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />

      <div className="restaurant-data">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
