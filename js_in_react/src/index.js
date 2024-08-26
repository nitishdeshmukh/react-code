import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Data(){
  function show(){
    var a=parseInt(document.getElementById("t1").value);
    var b=parseInt(document.getElementById("t2").value);
    var c=a+b;
    document.getElementById("z").innerHTML=c;
  }
  return (
    <div className="section">
      <input type="text" id="t1"/>
      <input type="text" id="t2"/>
      <input type="button" value="OK" onClick={show}/>
      <p id="z"></p>
    </div>
  );
}
root.render(
  <Data/>
);