import { logo_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={logo_URL} alt="logo_img" />
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
export default Header;
