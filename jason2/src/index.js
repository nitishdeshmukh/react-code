import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
var data = [
  {
    "userId": 101,
    "id": 1,
    "name": "nitish",
    "img": "https://picsum.photos/200/300" ,
  },
  {
    "userId": 102,
    "id": 2,
    "name": "abhay",
    "img": "https://picsum.photos/200/300" ,
  },
  {
    "userId": 103,
    "id": 3,
    "name": "manav",
    "img": "https://picsum.photos/200/300" ,
  },
  {
    "userId": 104,
    "id": 4,
    "name": "vaibhav",
    "img": "https://picsum.photos/200/300" ,
  },
  {
    "userId": 105,
    "id": 5,
    "name": "himanshu",
    "img": "https://picsum.photos/200/300" ,
  },
];
var d = data.map((element) => {
  return (
    <tr>
      <td>{element.userId}</td> 
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td><img src={element.img} alt=""/></td>
    </tr>
  );
});
root.render(
  <div>
    <table border="1">{d}</table>
  </div>
);
