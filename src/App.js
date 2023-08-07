import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
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
// PLANNING
// SLOWLY BUILT CODE

// wHY USE FRAMEWORK OR LIBRARY?
// MAKES DEVELOPER EXPERIENCE EASY WRITE LESS CODE AND GIVE MORE ON WEB PAGE

// Config Driven UI:- Web app is driven by DATA [How the UI Look Like USING DATA && and config comes from backend [it is the latest prectice that every company follows] Even for every city tere will be different data shon on every city/state]

// PROPS are just normal arguement to a function

// Good senior front end developeer Engineer is very good in UI and DATA LAyer Engineer

// What CDN does Cloudinary use?
// Cloudinary leverages multiple CDNs, including Akamai, the leading CDN provider, with thousands of global delivery servers. Together with Cloudinary's advanced caching techniques and dynamic URL-based image delivery, your resources are efficiently delivered to your users all around the world.

// React doesnt uniquely indentify the element that why we use key

// never Use INDEX as key bacause of elemnt has change didnt recommended

// React function component
// Normal JS function that return jsx code that is functional component

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
