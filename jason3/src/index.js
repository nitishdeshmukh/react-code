import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var data = [
  {
    "userId": 101,
    "marks1": 91,
    "marks2": 91,
    "marks3": 93,
    "name": "nitish",
  },
  {
    "userId": 102,
    "marks1": 92,
    "marks2": 92,
    "marks3": 94,
    "name": "abhay",
  },
  {
    "userId": 103,
    "marks1": 91,
    "marks2": 51,
    "marks3": 53,
    "name": "manav",
  },  
  {
    "userId": 104,
    "marks1": 61,
    "marks2": 71,
    "marks3": 83,
    "name": "vaibhav",
  },  
  {
    "userId": 105,
    "marks1": 41,
    "marks2": 51,
    "marks3": 33,
    "name": "himanshu",
  },
];
var d=data.map((element)=>{
  var s=  element.marks1+element.marks2+element.marks3;
  var p=s*100/300;
  var g=p>=75&&p<=100?"A":p>=60&&p<=64?"B":"C";
  return(
    <tr>
      <td>{s}</td> 
      <td>{p}</td>
      <td>{g}</td>
    </tr>
  );
});
root.render(
  <div>
    <table border="1">{d}</table>
  </div>
);