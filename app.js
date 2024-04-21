const head = React.createElement(
  "h1",
  { id: "head" },
  "the message from - React"
);

{
  /* <div>
  <h1>the message form - react h1</h1>
  <h2>the message form - react h2</h2>
</div>; */
}

const msg1 = React.createElement(
  "h1",
  { id: "message" },
  "the message from - React h1"
);
const msg2 = React.createElement(
  "h2",
  { id: "message" },
  "the message from - React h2"
);

const data = React.createElement("div", { id: "data" }, [msg1, msg2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);
root.render(data);
