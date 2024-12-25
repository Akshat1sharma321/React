//div
//  div
//    h1
//    h1
//  div
//  div
//    h1
//    h1
//  div
//div

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello World from react in one side"),
    React.createElement("h1", {}, "Hello World from react in  two side"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello World from react in one side"),
    React.createElement("h1", {}, "Hello World from react in  two side"),
  ]),
]);

const head = React.createElement(
  "h2",
  {},
  "Hello World from react"
);
const roote = ReactDOM.createRoot(document.getElementById("twop"));
roote.render(head);
const heading = React.createElement("h1", {}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("one"));
root.render(parent);
