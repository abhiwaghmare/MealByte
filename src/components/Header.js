import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img className="logo" src={CDN_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us </Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
