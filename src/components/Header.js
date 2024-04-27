import Title from "./logo";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [userAuth, setUserAuth] = useState("Login");
  return (
    <div className="HeadPart">
      <Title />
      <div className="navlist">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="navBtn">
        <button
          onClick={() =>
            userAuth === "Login" ? setUserAuth("Logout") : setUserAuth("Login")
          }
        >
          {userAuth}
        </button>
      </div>
    </div>
  );
};

export default Header;
