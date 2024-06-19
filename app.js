const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I'm a child heading")
  )
);
const element = React.createElement(
  "h1",
  { id: "test", xyz: "abc" },
  "Hello World! React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
