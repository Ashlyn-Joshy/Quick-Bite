import Title from "./logo";
const Header = () => {
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
    </div>
  );
};

export default Header;
