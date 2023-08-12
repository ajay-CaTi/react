import { imgUrl } from "../utils/constants";

const itemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div>
          <div
            className="text-left  p-2 m-2 border border-b-2 border-black"
            key={item.card.info.id}
          >
            <div className="font-bold text-lg">
              {item.card.info.name} | for: ₹ {item.card.info.price / 100}
            </div>
            <div className="py-2 flex">
              <span className="m-2 w-3/12 ">
                <div className="absolute">
                  <button className="p-2 shadow-lg bg-white rounded-lg">
                    Add +
                  </button>
                </div>
                <img
                  className="rounded-lg"
                  src={`${imgUrl}/${item.card.info.imageId}`}
                  alt={item.card.info.name}
                  width={"250px"}
                />
              </span>
              <p className="text-justify w-9/12">
                {item.card.info.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default itemList;
