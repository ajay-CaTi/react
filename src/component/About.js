import React, { useEffect } from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

// GraphQl Helps in Under and Over fetching Lode only data which is required in app

export default About;
// useEffect(() => {
//   dataFetch();
// }, []);
// const dataFetch = async () => {
//   const data = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   );
//   const json = await data.json();
//   console.log(json);
// };
