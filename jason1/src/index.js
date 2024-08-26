import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function  Data23()
{
    var [  x ,setx]=useState();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => setx(json))
    });

    return (

        <div>
        <table border='1'>
            <tr>
              <th>PostId</th>
              <th>Id</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Body</th>
            </tr>
        {
        x && x.map(element => {
          return  <tr> <td>{element.postId}</td> <td>{element.id}</td> <td>{element.name}</td> <td>{element.email}</td> <td>{element.body}</td> </tr>;
          
        })}
        </table>
      </div>
      
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Data23/> 
);

