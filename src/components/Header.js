import { CDN_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img className="logo" src={CDN_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
