import FoodItemList from "./FoodItemList";

const FoodCategory = ({ data, showData, setShowIndex }) => {
  const showDetails = () => {
    setShowIndex();
  };

  return (
    <>
      <div className="bg-white m-3 p-4 shadow-gray-100 shadow-md cursor-pointer">
        <div className=" flex justify-between " onClick={showDetails}>
          <span className="text-lg font-semibold">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showData && <FoodItemList items={data?.itemCards} />}
      </div>
    </>
  );
};

export default FoodCategory;
