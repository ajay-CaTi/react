import { Component } from "react";
import UserClass from "./UserClass";

// export default class About extends React.Component { // Also works
export default class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("pARENT componentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <UserClass name={"First"} location={"Delhi"} />
      </div>
    );
  }
}

// Virtu dom happens in Render Phase

// RENDER PHASE:- CONSTRUCTOR, RENDER (Pure and has no side effects. May be paused, aborted or restarted by React.)
// COMMIT PHASE:- DOM UPDATED AND COMPONENT DID MOUNT CALLED (Can work with DOM, run side effects, schedule updates.)

// REACT Badge the rennder phase & commit phase

// FIRST CONSTRUCTOR
// FIRST RENDER

// CHILD CONSTRUCTOR
// CHILD RENDER

// DOM UPDATES IN SINGLE BATCH

// react OPTIMIZATION

// FIRST componentDidMount
// CHILD componentDidMount

// react OPTIMIZATION

// parent componentDidMount

//WHy so Above thing happens Because once Cmmit phase is starts React tries to update the DOM and [DOM MENUULATION IS MOST EXPENSIVE THING WHEN WE UPDATING THING Beacuse it takes Time]

// FIRST CONSTRUCTOR WILL CALLED -->> THEN RENDER IS CALLED -->> THEN react update DOM -->> then COMPONENTDIDMOUNT CALLED

// Parent Constructor Parent Render
// Child Constructor Child Render

// import React from "react";
// import UserClass from "./UserClass";

// GraphQl Helps in Under and Over fetching Lode only data which is required in app

//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
