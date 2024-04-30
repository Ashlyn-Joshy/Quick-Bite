export const filterRestaurants = (searchValue, restaurants) => {
  const data = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return data;
};
