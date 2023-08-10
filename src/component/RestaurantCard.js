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
    // <div className="res_card" style={{ margin: "5px 0px" }}>
    //   <img src={url} alt={title} />
    //   <h3>{id}</h3>
    //   <h3>{title}</h3>
    // </div>

    <div className="res_card" style={{ margin: "5px 0px" }}>
      {cloudinaryImageId && (
        <div>
          <Link to={`http://localhost:1234/restmenu/${restaurantId}`}>
            <img src={`${imgUrl}/${cloudinaryImageId}`} alt={name} />
          </Link>
          <h3>{id || 272238}</h3>
          <h3>{name || "Rasgulla"}</h3>
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
export default RestaurantCard;
