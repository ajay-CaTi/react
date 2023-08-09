import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Simmer from "./Simmer";
// import { data } from "../utils/constants";
// the above is NAMED EXport

const Body = () => {
  // 1
  const [listOfResturants, setListOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("useEffect called");
    let data = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=20"
    );
    let json = await data.json();
    console.log(json);
    setListOfResturants(json);
  };

  const changeFun = (e) => {
    let val = e.target.value;
    setSearchText(val.toLowerCase());
  };
  console.log(listOfResturants);

  // COnditional Rendring:-Rendring on basis of condition known as conditional rendering

  const filtter = () => {
    const filteredResturant = listOfResturants.filter((res) =>
      res.title.toLowerCase().includes(searchText)
    );
    setListOfResturants(filteredResturant);
    setListOfResturants(listOfResturants);
  };

  if (listOfResturants.length === 0) {
    return <Simmer />;
  }

  // console.log(listOfResturants);

  // fetch() Given by Browser
  // if origin mismatch browser block to access api
  // Browser now allowing us to call swiggy api from local host form one origin to another origin

  // https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/byilgyrcfz690ryoasww
  // media-assets.swiggy
  return (
    <div>
      <div className="body">
        <div className="fil">
          <input type="text" value={searchText} onChange={changeFun} />
          <button onClick={filtter}>Click</button>
        </div>
        <div className="res_container">
          {listOfResturants
            .filter((val) => val.title.toLowerCase().includes(searchText))
            .map((value) => {
              return (
                <RestaurantCard
                  key={value.id}
                  title={value.title}
                  url={value.url}
                  id={value.id}
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
