import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import useRestraurantMenu from "../utils/useRestraurantMenu";

const RestMenu = () => {
  const { resId } = useParams();
  // CUSTOM HOOK
  const resInfo = useRestraurantMenu(resId);

  // const [resInfo, setResInfo] = useState(null);
  // console.log(resId);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   console.log(
  //     json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //       ?.card?.itemCards
  //   );
  //   setResInfo(
  //     json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //       ?.card?.itemCards
  //   );
  // };
  // console.log(resInfo, "info");
  if (resInfo === null) {
    return <Simmer />;
  }
  return (
    <div className="aaa" style={{ margin: "5px 0px" }}>
      <h1 style={{ width: "90%", margin: "auto", textAlign: "center" }}>
        Dishes
      </h1>
      {resInfo.map((data) => {
        return (
          <div>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data.card.info.imageId}`}
              alt=""
            />
            <h1>{data.card.info.id}</h1>
            <h2>{data.card.info.name}</h2>
            <h3>{data.card.info.price}</h3>
            <h3>{data.card.info.description}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default RestMenu;

// Hook are just KIND oF UTILiIY Function

// Take out some responsibility from a component and extract it in a hook our hook and component become modular

// why need custom hook
// Not mendatory But doing this will make code more modular and redable, reusable

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wwbhls455g2syydrkmvo
