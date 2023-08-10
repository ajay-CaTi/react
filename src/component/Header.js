import { useState } from "react";
import { Link } from "react-router-dom";
import { logo_URL } from "../utils/constants";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  // let btnName = "Login";

  // setBtn will update this btn and call the HEADER function again. Now Header wil have is new value.

  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={logo_URL} alt="logo_img" />
      </div>
      <div className="nav_items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
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

// React fiber, React Reconcillation algo

// When ever state veriable updates, react triggers a reconcillation cycle/ rerender component

//EVry time the button trigger a reconcillation proces s run find diff between REal and virtual dome and only updated that value by rendring that component

// There will be some way through which we refresh and updated the current value of variable thats why we nee w use state
