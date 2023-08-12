import { useEffect, useState } from "react";

const useRestraurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //fetchdata

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json, "data");
    setResInfo(json?.data?.cards);
    // json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

    console.log(json?.data?.cards);
  };

  return resInfo;
};

export default useRestraurantMenu;
