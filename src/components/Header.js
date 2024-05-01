import Title from "./logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/img/shoppingCart.png";

const Header = () => {
  const [userAuth, setUserAuth] = useState("Login");
  return (
    <div className="flex justify-between">
      <Title />
      <div className="navlist">
        <ul className="flex m-8">
          <li className="px-2  font-bold hover:text-green-600  hover:underline-offset-2 hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2  font-bold hover:text-green-600  hover:underline-offset-2 hover:underline">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-2  font-bold hover:text-green-600  hover:underline-offset-2 hover:underline">
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <div className="flex m-5">
        <button>
          <img
            className="w-9 p-2 hover:bg-green-600 rounded mx-2"
            src={cartIcon}
            alt="cartIcon"
          />
        </button>
        <button
          className="p-2 bg-green-600 rounded text-white"
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
