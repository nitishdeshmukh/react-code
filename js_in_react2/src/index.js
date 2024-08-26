import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
function Data() {
  function check() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var mobno = document.getElementById("mobno").value;
    var email = document.getElementById("email").value;
    var re_name = /^[a-zA-Z ]{2,30}$/;
    var re_age = /^[0-9]{1,2}$/;
    var re_mobno = /^[0-9]{10}$/;
    var re_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!re_name.test(name)) {
      alert("Invalid name");
    }
    if (!re_age.test(age)) {
      alert("Invalid age");
    }
    if (!re_mobno.test(mobno)) {
      alert("Invalid mob no");
    }
    if (!re_email.test(email)) {
      alert("Invalid email");
    }
  }
  return (
    <div className="">
      <form action="" >
        <input type="text" placeholder="Enter name" id="name" />
        <br />
        <input type="age" placeholder="Enter age" id="age" />
        <br />
        <input type="mobno" placeholder="Enter mob no" id="mobno" />
        <br />
        <input type="email" placeholder="Enter a mail" id="email" />
        <br />
        <button onClick={check}>Submit</button>
      </form>
    </div>
  );
}
root.render(
  <Data/>
);