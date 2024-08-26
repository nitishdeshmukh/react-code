import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
// ComponentConcept--->
function Header() {
  return <div className="header"></div>;
}
function Box() {
  return <div className="box"></div>;
}
function Box1() {
  return <div className="box1"></div>;
}
function Box2() {
  return <div className="box2"></div>;
}
root.render(
  <div>
    <Header />
    <div className="a">
      <Box />
      <Box />
    </div>
    <div className="c">
      <Box1 />
    </div>
    <div className="b">
      <Box2 />
      <Box2 />
      <Box2 />
    </div>
  </div>
);