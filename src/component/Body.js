import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { data } from "../utils/constants";
// the above is NAMED EXport

// The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

// React is fast because it has virtual dome it has diff algo which is very efficiently menupulation dom, find the diference and update dome

// vrtual dome(Dome JS representation of it) is introduce a long back of react. React Pick that and build its core ove that vertual done

// as soon as the state variable updtaes it automatically refresh component it is known as rerender
// diffing algo:- find diff between OLD VIRTUAL DOME(like an object representation) and ACTUAL DOM
// React uses reconcillation also known as(react fiber)
// virtual dome:- representation of actual dome
// react fiber :- comes in React version 16 new algo to update dome
//

const Body = () => {
  // 1
  // const [listOfResturants, setListOfResturants] = useState(data);
  // 2
  // const arr = useState(data);
  // const [listOfResturants, setListOfResturants] = arr;
  // 3
  const arr = useState(data);
  const listOfResturants = arr[0];
  const setListOfResturants = arr[1];
  // array destructuring
  return (
    <div>
      <div className="body">
        <div className="filter">
          <button
            className="filter_btn"
            onClick={() => {
              // console.log(filteredList);
              let filteredList = listOfResturants.filter(
                (res) => res.costForTwo > 4008
              );
              console.log(filteredList);
              setListOfResturants(filteredList);
            }}
            onMouseOver={() => {
              console.log("click");
            }}
          >
            Top rated resturant
          </button>
        </div>
        <div className="res_container">
          {listOfResturants.map((val, index) => {
            return (
              <RestaurantCard
                cloudinaryImageId={val.cloudinaryImageId}
                key={val.id}
                name={val.name}
                url={val.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
