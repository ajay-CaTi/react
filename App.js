// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from react"
// );
// console.log(heading);
// PROPS  { id: "heading" },
// {use for ATTRIBUTE}
//{$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}

// const root = ReactDOM.createRoot(document.getElementById("root"));

// createElement :- TAKES 3 API {1. NAME OF TAG HE, DIV, 2. ATTRIBUTE(OBJECTS), CHILDREN} MULTIPLE CHILDREN PASS IN LIST OF ARRAY

// WHAT EVER IS ROOT IS REPLACE BY ROOT.RENDER() FUNCTION
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/b3/e5/f3/b3e5f321d4aedcf983a6c95f5a6d0b88.png"
          alt="logo_img"
        />
      </div>
      <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // const {name}=props;
  const { pageTitle, ogDescription, quzines } = props.name;
  return (
    <div className="res_card">
      <h3>MaheshWar Foods</h3>
      <h3>{pageTitle}, dal chawal, kadhi, roti</h3>
      <h3>{quzines.join(", ")}, dal chawal, kadhi, roti</h3>
      <h3>{ogDescription}, dal chawal, kadhi, roti</h3>
    </div>
  );
};

// Config Driven UI:- Web app is driven by DATA [How the UI Look Like USING DATA && and config comes from backend [it is the latest prectice that every company follows] Even for every city tere will be different data shon on every city/state]

// PROPS are just normal arguement to a function

// Good senior front end developeer Engineer is very good in UI and DATA LAyer Engineer

const data = {
  name: "search",
  pageTitle: "Restaurants in Delhi NCR - Zomato",
  pageDescription:
    "Check out the list of all Restaurants in Delhi NCR. Check their menu, reviews & rating, photos, price, location, cuisine, offers, and more.",
  pageUrl:
    "/ncr/restaurants?place_name=Ywca, 1, Ashoka Rd, Hanuman Road Area, Connaught Place, New Delhi, Delhi",
  title: "Restaurants in Delhi NCR - Zomato",
  isNoIndex: false,
  ogTitle: "Restaurants in Delhi NCR - Zomato",
  ogDescription:
    "Check out the list of all Restaurants in Delhi NCR. Check their menu, reviews & rating, photos, price, location, cuisine, offers, and more.",
  ogPageUrl:
    "/ncr/restaurants?place_name=Ywca, 1, Ashoka Rd, Hanuman Road Area, Connaught Place, New Delhi, Delhi",
  subType: "delivery",
  quzines: ["some", "thing", "good", "alwayas", "there", "be", "positive"],
  isMobile: 0,
  isTablet: 0,
  isOAuthV2Enabled: false,
  useAuthSdkForLogin: true,
  useAuthSdkForLogout: false,
  gaPageType: "Search",
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res_container">
        <RestaurantCard name={data} />
        {/* <RestaurantCard name={data} />
        <RestaurantCard name={data} />
        <RestaurantCard name={data} /> */}
      </div>
    </div>
  );
};

// React function component
const AppLayout = () => {
  // Normal JS function that return jsx code that is functional component
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// style{{backgroundColor:"#f0f0f0"}}
// first curley braces for some js code and other is JS OBJECT

// root.render(heading);
// Code Redable:- Because of JSX
// WHat makes React code faster
// ANs is WebPack Parcel the are builders

// Attack through Browser is known as Cross-side scripting [ JSX take care of INJECTION ATTACKS prevet from cross-site scripting / JSX FIRST sanitise data and then run ]

// Component Composition :- Using one Componenet to another

// React.createElement==>ReactElement(Object) ==> HTMLElement(By render)

// JSX => BABEL is transpile to React.createElement ==> converted to ReactELement(Object) ==> HTMLElement(By render)

// react and jsx both are different

// TIME E3 45.00

// create abstract syntax tree, parsing, tokens

// The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating).

// JSX - is HTML like syntax but not HTML
// render te parent to my root
// .render() Job is :- TAke this object and create h1 tag i.e understandable by browser and put it inside root

// echo "# react" >> README.md
// git init
// git add .{add all files needs to go inside commit}
// git commit -m "first commit"
// git branch -M main {create a default branch main i.e master}
// git remote add origin https://github.com/ajay-CaTi/react.git
// git push -u origin main(push all code in repository)

// Git is a version control system that allows developers to track changes in their code. GitHub is a web-based hosting service for git repositories. In simple terms, you can use git without Github, but you cannot use GitHub without Git.

// JSX:- (code is transpiled before it reaches the JS  Engine) - PARCEL{from BABEL}

// BABEL:- JS Compiler ( takes jsx and conv into code that Browser understand )

// React.createElement==>ReactElement(Object) ==> HTMLElement(By render)
