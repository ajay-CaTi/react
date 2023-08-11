import { useState } from "react";
import { Link } from "react-router-dom";
import { logo_URL } from "../utils/constants";
import useOnlineStat from "../utils/useOnlineStat";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  // let btnName = "Login";

  // setBtn will update this btn and call the HEADER function again. Now Header wil have is new value.
  const onlineStat = useOnlineStat();
  console.log(onlineStat);

  return (
    <div className="sm:bg-yellow-100 lg:bg-green-100 dark:bg-slate-100 flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo_container">
        <img className="w-20" src={logo_URL} alt="logo_img" />
      </div>
      <div>
        <ul className="flex p-3 m-2">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li className="px-4">
            Status: {onlineStat ? "Online ✅" : "Offline 🔴"}
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

// Higher Order Function is a function that takes some component and return some component
// HOF Takes a component as input Add some extra features to it and return it as output

// React fiber, React Reconcillation algo

// When ever state veriable updates, react triggers a reconcillation cycle/ rerender component

//EVry time the button trigger a reconcillation proces s run find diff between REal and virtual dome and only updated that value by rendring that component

// There will be some way through which we refresh and updated the current value of variable thats why we nee w use state
