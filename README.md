# React a deep approach

# Parcel

-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm -written in C++
-Caching - Faster Builds
-Image Optimization
-Minification of files
-Bundling
-compress(remove white space)
-Consistent Hashing ?
-code splitting
-Differential Bundling [app can be open in new as well as old browsers when use <script type="module"></script></script> parcel automatically generate a nodemodule fallback for all browsers ]
-Diagnostics (Beautiful error suggestion in terminal)
-Error Handling
-HTTPS [npx parcel index.html --https lodes in https mode not http]
-Tree shaking - remove unuse code

-Different dev and prod bundles(build)

// filter item form search bar
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

npx parcel build index.html
GIVES ERROR bec
parcel conflict with PACKAGE.JSON main:"App.js" file i.e entry point
but we use [npx parcel build index.html] entry point index.html

so remove it from package.json

npx parcel index.html ::-- this creates DEV BUILD

npx parcel index.html ::-- this creates PRODUCTION BUILD

A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface.

// const heading = React.createElement(
// "h1",
// { id: "heading" },
// "Hello World from react"
// );
// console.log(heading);
// PROPS { id: "heading" },
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

// JSX:- (code is transpiled before it reaches the JS Engine) - PARCEL{from BABEL}

// BABEL:- JS Compiler ( takes jsx and conv into code that Browser understand )

// React.createElement==>ReactElement(Object) ==> HTMLElement(By render)

// The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

// React is fast because it has virtual dome it has diff algo which is very efficiently menupulation dom, find the diference and update dome

// vrtual dome(Dome JS representation of it) is introduce a long back of react. React Pick that and build its core ove that vertual done

// as soon as the state variable updtaes it automatically refresh component it is known as rerender
// diffing algo:- find diff between OLD VIRTUAL DOME(like an object representation) and ACTUAL DOM
// React uses reconcillation also known as(react fiber)
// virtual dome:- representation of actual dome
// react fiber :- comes in React version 16 new algo to update dome
//

// 1
// const [listOfResturants, setListOfResturants] = useState(data);
// 2
// const arr = useState(data);
// const [listOfResturants, setListOfResturants] = arr;
// 3
const arr = useState(data);
const listOfResturants = arr[0];
const setListOfResturants = arr[1];

// Monolith:- APin code, UI code, Auth code, DB connectivity code, SMs send code in same project
// IF some minimal change then BUILD -> COMPILE -> DEPLOY bulky project tHis is monolethic arcticture
// all different work developers have to work over same project

// Microservice Arcticture :- In this Diff. service in diff job Backend service Ui job Auth service, DB service that connect to db, service of sms sending, service of emial notification

// All service combine to form a big app

// UBER follow on micro service depend upon use case all microservice talk to each other
// Each and every small service/thing we have seperate project known as seperation of concern and SINGLE RESPONSIBILITY PRINCIPLE
//WHERE each every service have their own job
// With microservice arcticture all teams work over own different service

// Each service mension above written in sam elanguage in MONOLITHIC Arcticture

// Each service mension above written in DIFFERENT language(java , react, golang) in MICROSERVICE Arcticture

// All service in MICROSERVICE Arcticture run on their own specific port

// communicate with each other like
// all port map to domain name
// UI(/), Backend(/api), SMS(/sms) communicate through making call to that port

// A soon as page loads --> make api request --. render DATA(UI)

// As soon as page lods --> quickly rende UI --> NOw make API CAll --> Then rerender our application with new data.
// In React use thi sapproch
// React render UI very fast

// As Soon As the body render cycle finished then after the useeffect called

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
