import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);
  const handleClick = () => {
    console.log("click");
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-200 shadow-lg p-4 mx-auto my-3 text-center">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          {/* Heade  */}
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Acc Body  */}
        {showItems ? <ItemList items={data.itemCards} /> : ""}
      </div>
    </div>
  );
};
export default ResturantCategory;
