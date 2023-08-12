import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import useRestraurantMenu from "../utils/useRestraurantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const RestMenu = () => {
  const [showIndex, setShowIndex] = useState(1);

  const { resId } = useParams();
  // CUSTOM HOOK
  const resInfo = useRestraurantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) {
    return <Simmer />;
  }

  const {
    name,
    avgRating,
    cuisines,
    sla: { deliveryTime },
    costForTwoMessage,
  } = resInfo[0].card.card.info;
  // console.log(name, avgRating, cuisines.join(", "));

  const card1 = resInfo[1].card.card.gridElements.infoWithStyle.offers;
  console.log(card1);

  const categories = resInfo[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) => {
      return (
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    }
  );
  // console.log(resInfo[2].groupedCard.cardGroupMap.REGULAR.cards[2], "data");
  console.log(categories, "categories");

  return (
    <>
      <div className="aaa" style={{ margin: "5px 0px" }}>
        <div style={{ width: "90%", margin: "auto", textAlign: "center" }}>
          <h2 className="font-bold">{name}</h2>{" "}
          <h3 className="font-bold">AvgRatings:- {avgRating}</h3>
          <h2 className="font-bold">
            {cuisines.join(", ")}, Delivered in just:- {deliveryTime} mins.
          </h2>
          <h3 className="font-bold">{costForTwoMessage}</h3>
        </div>
        <div>
          {card1.map((item, index) => (
            <div
              className="border border-pink-300 rounded-lg"
              key={index}
              style={{ width: "90%", margin: "auto", textAlign: "center" }}
            >
              <h3>{item.info.offerType}</h3>
              <h2>
                <span>{item.info.description}</span>
                {item.info.header}
              </h2>
            </div>
          ))}
        </div>
        <div>
          {/* Category Accordian */}
          {categories.map((category, index) => {
            return (
              <ResturantCategory
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                key={index}
                data={category.card.card}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestMenu;

// Hook are just KIND oF UTILiIY Function

// Take out some responsibility from a component and extract it in a hook our hook and component become modular

// why need custom hook
// Not mendatory But doing this will make code more modular and redable, reusable

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wwbhls455g2syydrkmvo
