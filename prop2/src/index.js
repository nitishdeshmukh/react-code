import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
function Header1(prop) {
  return <div className="header1">{prop.data}</div>;
}
function Header2(prop) {
  return <div className="header2">{prop.data}</div>;
}
function Box(prop) {
  return (
    <div className="box">
      <div className="inner-header">{prop.data1}</div>
      <div className="inner-main-section">
        <div className="text-section">{prop.data2}</div>
        <button><div className="button-name">{prop.data3}</div></button>
      </div>
    </div>
  );
}
function Fotter() {
  return <div className="fotter"></div>;
}
root.render(
  <div>
    <Header1 data="CSS Responsive"/>
    <Header2 data="Flexbox Cards"/>
    <div className="main-section">
      <Box data1="React" 
      data2="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ab illum! Nisi delectus enim fuga necessitatibus accusamus natus similique. Illo fuga natus minus molestias itaque ratione veniam quae enim quia corporis? Aut in aliquam non earum suscipit incidunt recusandae, neque dolores porro perferendis quis placeat quisquam dolorem pariatur itaque rem!" 
      data3="Read More"/>
      <Box data1="Vue" 
      data2="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ab illum! Nisi delectus enim fuga necessitatibus accusamus natus similique. Illo fuga natus minus molestias itaque ratione veniam quae enim quia corporis? Aut in aliquam non earum suscipit incidunt recusandae, neque dolores porro perferendis quis placeat quisquam dolorem pariatur itaque rem!" 
data3="Read More"/>
      <Box data1="Angular" 
      data2="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ab illum! Nisi delectus enim fuga necessitatibus accusamus natus similique. Illo fuga natus minus molestias itaque ratione veniam quae enim quia corporis? Aut in aliquam non earum suscipit incidunt recusandae, neque dolores porro perferendis quis placeat quisquam dolorem pariatur itaque rem!" 
      data3="Read More"/>
      <Box data1="JQuery" data2="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ab illum! Nisi delectus enim fuga necessitatibus accusamus natus similique. Illo fuga natus minus molestias itaque ratione veniam quae enim quia corporis? Aut in aliquam non earum suscipit incidunt recusandae, neque dolores porro perferendis quis placeat quisquam dolorem pariatur itaque rem!" data3="Read More"/>
    </div>
    <Fotter />
  </div>
);