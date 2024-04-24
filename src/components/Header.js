import Title from "./logo";
import { useState } from "react";
const Header = () => {
  const [userAuth, setUserAuth] = useState("Login");
  return (
    <div className="HeadPart">
      <Title />
      <div className="navlist">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
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
