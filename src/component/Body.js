import RestaurantCard from "./RestaurantCard";
import { withPromotedLabel } from "./RestaurantCard";

import { useEffect, useState } from "react";
import Simmer from "./Simmer";
import useOnlineStat from "../utils/useOnlineStat";

const Body = () => {
  // 1
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // keep copy in this state and filter on this
  // const [filtered, setFilteredRestaurant] = useState([]);
  // const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
    // console.log("effect");
  }, []);
  // console.log("outside effect");

  const fetchData = async () => {
    // console.log("useEffect called");
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();

    console.log(json);
    // console.log(
    //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );

    setListOfResturants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); // Clever
  };

  console.log(listOfResturants);

  // COnditional Rendring:-Rendring on basis of condition known as conditional rendering

  const filtter = () => {
    const filteredList = listOfResturants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText)
    );
    // console.log(filteredList);
    // setListOfResturants(filteredList);
    setFilteredRestaurant(filteredList);
  };

  // Button to filter restraurant thata have higher rating than 4.3
  const fil = () => {
    const ratingHigher = listOfResturants.filter((val) => {
      return val.info.avgRating > 4.3;
    });
    setListOfResturants(ratingHigher);
  };

  const onlineStat = useOnlineStat();
  console.log(onlineStat);
  if (onlineStat === false) {
    return <h1>Looks you are offine. Check your internet connection</h1>;
  }
  if (listOfResturants.length < 1) {
    return <Simmer />;
  }

  return (
    <div>
      <div className="body">
        <div className="fil">
          <input
            className="rounded-lg border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="rounded-lg ms-5 mr-5 bg-green-100 px-3 py-1"
            onClick={filtter}
          >
            Click
          </button>

          {/* Button to filter restraurant thata have higher rating than 4.3 */}
          <button
            className="rounded-lg ms-5 mr-5 bg-green-100 px-3 py-1"
            onClick={fil}
          >
            click here
          </button>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurant.map((val) => {
            return val.info.isOpen ? (
              <RestaurantCardPromoted
                key={val.info.id}
                name={val.info.name}
                id={val.info.id}
                avgRating={val.info.avgRating}
                cost={val.info.costForTwo}
                cuisines={val.info.cuisines}
                cloudinaryImageId={val.info.cloudinaryImageId}
                deliveryTime={val.info.sla.deliveryTime}
                restaurantId={val.info.feeDetails.restaurantId}
              />
            ) : (
              <RestaurantCard
                key={val.info.id}
                name={val.info.name}
                id={val.info.id}
                avgRating={val.info.avgRating}
                cost={val.info.costForTwo}
                cuisines={val.info.cuisines}
                cloudinaryImageId={val.info.cloudinaryImageId}
                deliveryTime={val.info.sla.deliveryTime}
                restaurantId={val.info.feeDetails.restaurantId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// All React Apps have 2 layers
// 1. Data layer (Consist of Sates Props Local Variables What ever data in app)
// 2. UI Layer Powered by (Data Layer)

// As soon as component loading finish the useEffect called

export default Body;
// https://jsonplaceholder.typicode.com/photos?_limit=20

// fetch() Given by Browser

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=392828&catalog_qa=undefined&submitAction=ENTER

// RESTAURANTS API
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

// IMAGE LINK CHANGE cloudinary image in last
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/94d3bc5e6392fbaf50686cf8cfab10ef
