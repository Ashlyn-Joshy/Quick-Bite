import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import ShimmerEffect from "./shimmer.js";
import Search from "./Search.js";
import useRestaurantDataBody from "../Hooks/useRestaurantDataBody.js";
import useOnline from "../Hooks/useOnline.js";
const Body = () => {
  const [
    allRestaurants,
    filteredRestaurants,
    searchValue,
    isLoaded,
    setFilteredRestaurants,
  ] = useRestaurantDataBody();

  const isOnline = useOnline();
  if (!isOnline) return <h1>No Internet Connection</h1>;

  return !isLoaded ? (
    <ShimmerEffect />
  ) : (
    <>
      <Search
        allRestaurants={allRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />

      <div className=" flex flex-wrap m-8 ">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant found </h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
