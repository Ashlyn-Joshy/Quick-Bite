import { createElement as ce } from "react";
import ReactDOM from "react-dom/client";

// const head = React.createElement(
//   "h1",
//   { id: "head" },
//   "the message from - React"
// );

{
  /* <div>
  <h1>the message form - react h1</h1>
  <h2>the message form - react h2</h2>
</div>; */
}

// const msg1 = React.createElement(
//   "h1",
//   {
//     id: "message",
//     key: "msg1",
//   },
//   "the message from - React h1"
// );
// console.log(msg1);
// const msg2 = React.createElement(
//   "h2",
//   {
//     id: "message",
//     key: "msg2",
//   },
//   "the message from - React h2"
// );

// const data = React.createElement("div", { id: "data" }, [msg1, msg2]);

{
  /* <div>
      <h1>Listify</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
      </ul>
    </div> */
}

// const item1 = React.createElement("li", { key: "home" }, "home");
// const item2 = React.createElement("li", { key: "about" }, "about");
// const item3 = React.createElement("li", { key: "support" }, "support");

// const navbarHeader = React.createElement(
//   "h1",
//   { key: "navbar-head" },
//   "listify"
// );
// const navbarList = React.createElement("ul", { key: "navbar-list" }, [
//   item1,
//   item2,
//   item3,
// ]);

//  method 1
// const navbar1 = React.createElement("div", {}, [navbarHeader, navbarList]);

//  method 2
// const navbar2 = React.createElement("div", {}, [
//   React.createElement("h1", { key: "navbar-head" }, "listify 📃"),
//   React.createElement("ul", { key: "navbar-list" }, [
//     React.createElement("li", { key: "home" }, "home"),
//     React.createElement("li", { key: "about" }, "about"),
//     React.createElement("li", { key: "support" }, "support"),
//   ]),
// ]);

// method 3
// const navbar3 = createElement("div", {}, [
//   createElement("h1", { key: "navbar-head" }, "listify 🗒️"),
//   createElement("ul", { key: "navbar-list" }, [
//     createElement("li", { key: "home" }, "home"),
//     createElement("li", { key: "about" }, "about"),
//     createElement("li", { key: "support" }, "support"),
//   ]),
// ]);

// method 4
const navbar4 = ce("div", {}, [
  ce("h1", { key: "navbar-head" }, "listify 📝"),
  ce("ul", { key: "navbar-list" }, [
    ce("li", { key: "home" }, "home"),
    ce("li", { key: "about" }, "about"),
    ce("li", { key: "support" }, "support"),
  ]),
]);

// --------------------------- JSX -------------------------------------
const Title = () => {
  return <h1>JSX</h1>;
};

const fun = (
  <div>
    <h1>Fun Games -- JSX</h1>
    <ul>
      <li>Tic Tia Toe</li>
      <li>Snake</li>
      <li>2024</li>
      <li>Pong</li>
      <li>Flappy Bird</li>
      <li>Space Invaders</li>
    </ul>
  </div>
);

const info = "any js code will working in {}";
const PartyComponent = () => {
  return (
    <div>
      <Title />
      {Title()}
      {info}
      {fun}
      <h1>Party -- React functional component</h1>
      <h2>let's dance</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);
// root.render(data);
//root.render(navbar1);
// root.render(navbar2);
// root.render(navbar3);
root.render(navbar4);
root.render(fun);
root.render(<PartyComponent />);
