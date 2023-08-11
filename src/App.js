import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Contact from "./component/Contact";
import About from "./component/About";
import Error from "./component/Error";
import RestMenu from "./component/RestMenu";
// import BELOW is not same as ABOVE
const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/About"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restmenu/:resId",
        element: <RestMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

// Import Like this( const Grocery = lazy(() => import("./component/Grocery")); ) Without Using Suspence will give an error as soon as we make a request for grocery the grocery bundle will take time to reach in between that time React do not have the Grocery code to render thats why thi serror comes.

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />); // directly render here but now
root.render(<RouterProvider router={appRouter} />); //

// PostCss:- tools for transforming CSS with JS
// npx tailwindcss init: create a configur file
// .postcssrc Configuration file for postcss

// Why so above file Beacause PARCEL needs .postcssrc file to understand tailwind

// content: [ "./src/**/*.{html,js,ts,jsx,tsx}", ], We can use TAILWIND Under these extension

// FOR STYLE
// Styled components
// SCSS
// library bootstrap, ant design, material ui, chakra ui, tailwind css

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic import

// echo "# react" >> README.md
// git init
// git add .{add all files needs to go inside commit}
// git commit -m "first commit"
// git branch -M main {create a default branch main i.e master}
// git remote add origin https://github.com/ajay-CaTi/react.git
// git push -u origin main(push all code in repository)

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=392828&catalog_qa=undefined&submitAction=ENTER
