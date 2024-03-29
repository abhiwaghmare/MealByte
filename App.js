// const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
import React from 'react'
import ReactDOM from 'react-dom/client'
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", {}, "I am tag h1 from child1"),React.createElement("h2", {}, "I am tag h2 from child1")]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "I am tag h1 from child2"),React.createElement("h2", {}, "I am tag h2 from child2")]
  )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
