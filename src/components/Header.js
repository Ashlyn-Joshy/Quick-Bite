import Title from "./logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/img/shoppingCart.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [userAuth, setUserAuth] = useState("Login");
  const [displayNav, setDisplayNav] = useState(false);
  const showNav = () => {
    setDisplayNav(!displayNav);
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6 ">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Title />
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-green-600 border-green-600 hover:text-white hover:bg-green-600"
            onClick={showNav}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto navbarItems ${
            displayNav ? "" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to={"/"}
              className="block mt-4 lg:inline-block lg:mt-0 text-green-600 hover:underline hover:underline-2 font-bold mr-4"
            >
              Home
            </Link>
            <Link
              to={"/contact"}
              className="block mt-4 lg:inline-block lg:mt-0 text-green-600 hover:underline hover:underline-2 font-bold mr-4"
            >
              Contact
            </Link>
            <Link
              to={"/about"}
              className="block mt-4 lg:inline-block lg:mt-0 text-green-600 hover:underline hover:underline-2 font-bold"
            >
              About
            </Link>
          </div>
          <div>
            <Link to={"/cart"}>
              <button className="text-sm px-4 py-2 mr-4 leading-none border rounded text-green-600 border-green-600 hover:border-transparent hover:text-white hover:bg-green-600 mt-4 lg:mt-0">
                <img className="h-6 inline" src={cartIcon} alt="cartIcon" />
                <span className="inline pl-2">{cartItems.length} items</span>
              </button>
            </Link>
            <button
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-green-600 border-green-600 hover:border-transparent hover:text-white hover:bg-green-600 mt-4 lg:mt-0"
              onClick={() =>
                userAuth === "Login"
                  ? setUserAuth("Logout")
                  : setUserAuth("Login")
              }
            >
              {userAuth}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
