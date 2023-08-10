import RestaurantCard from "./RestaurantCard";
import image from "../utils/images/food.jpg";

import { useEffect, useState } from "react";
import Simmer from "./Simmer";

const Body = () => {
  // 1
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // keep copy in this state and filter on this
  // const [filtered, setFilteredRestaurant] = useState([]);
  // const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    console.log("effect");
  }, []);
  console.log("outside effect");

  const fetchData = async () => {
    console.log("useEffect called");
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
    console.log(filteredList);
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

  if (listOfResturants.length < 1) {
    return <Simmer />;
  }
  return (
    <div>
      <div className="body">
        <div className="fil">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={filtter}>Click</button>

          {/* Button to filter restraurant thata have higher rating than 4.3 */}
          <button onClick={fil}>click here</button>
        </div>
        <div className="res_container">
          <RestaurantCard img={image} />
          {filteredRestaurant.map((val) => {
            return (
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

// As soon as component loading finish the useEffect called

export default Body;
// https://jsonplaceholder.typicode.com/photos?_limit=20

// fetch() Given by Browser

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=392828&catalog_qa=undefined&submitAction=ENTER

// RESTAURANTS API
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

// IMAGE LINK CHANGE cloudinary image in last
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/94d3bc5e6392fbaf50686cf8cfab10ef
