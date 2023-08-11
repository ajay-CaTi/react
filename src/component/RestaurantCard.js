import { imgUrl } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const {
    id,
    name,
    avgRating,
    cost,
    cloudinaryImageId,
    cuisines,
    deliveryTime,
    restaurantId,
  } = props;

  // console.log(name);
  return (
    <div style={{ margin: "5px 0px" }}>
      {cloudinaryImageId && (
        <div className="m-4 w-[250px] rounded-lg bg-slate-100 p-2 hover:bg-gray-200">
          <Link to={`http://localhost:1234/restmenu/${restaurantId}`}>
            <img
              className="rounded-lg"
              src={`${imgUrl}/${cloudinaryImageId}`}
              alt={name}
            />
          </Link>
          <h3>{id || 272238}</h3>
          <h3 className="font-bold text-lg">{name || "Rasgulla"}</h3>
          <h3>{cost || "₹110 for two"} </h3>
          {/* {console.log(cuisines.join(", "))} */}
          <h3>{cuisines.join(", ")}</h3>
          <h3>{deliveryTime} mins.</h3>
          <h3>Ratings {avgRating || "5"}</h3>
        </div>
      )}
    </div>
  );
};
// REACT is fast in dom menupulation

// Higher Order Component

// Input -RestaurantCard ==>> RestaurantCardPrormoted

const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black ml-7 p-1 rounded-md text-white">
          Is Online
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export { withPromotedLabel };
export default RestaurantCard;
