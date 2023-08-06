// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from react"
// );
// console.log(heading);
// PROPS  { id: "heading" },
// {use for ATTRIBUTE}
//{$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}

// const root = ReactDOM.createRoot(document.getElementById("root"));

// createElement :- TAKES 3 API {1. NAME OF TAG HE, DIV, 2. ATTRIBUTE(OBJECTS), CHILDREN} MULTIPLE CHILDREN PASS IN LIST OF ARRAY

// WHAT EVER IS ROOT IS REPLACE BY ROOT.RENDER() FUNCTION

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { className: "mm" }, "i am heading"),
    React.createElement("h2", { className: "mm" }, "i am h2 heading"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { className: "mm" }, "i am heading"),
    React.createElement("h2", { className: "mm" }, "i am h2 heading"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent); // render te parent to my root
// .render() Job is :- TAke this object and create h1 tag i.e understandable by browser and put it inside root

// echo "# react" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/ajay-CaTi/react.git
// git push -u origin main
