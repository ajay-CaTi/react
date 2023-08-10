import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      console.log("Interval");
    }, 1000);
    return () => {
      console.log("use effectreturn");
    };
  }, []);
  return (
    <div className="user_card">
      <h1>Hi User Count:{count}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: Delhi</h2>
      <h2>Contact: @ajay.info.in</h2>
    </div>
  );
};
export default User;

// custome hook :- abstract or take out some responsibility from component and extract it inside hook so our hook ans component become modular and redable

// SINGLE RESPONSIBILITY PRINCIPLE :- Means that Every single module in my code will have a responsibility
// Ex:- responsiblty of ResturantCard() is to display resturant MENU

// code will become resuable mentanable testable

// Header will have a single responsibility to display header over page

// Make your code into smaller smaller chunks files keep it modular makes your code mentainable and testable code become resuable
