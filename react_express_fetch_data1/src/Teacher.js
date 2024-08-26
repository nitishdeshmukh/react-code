import { useEffect,useState } from "react";
export default function  Teacher()
{
    var [  x ,setx]=useState();
    useEffect(()=>{
        fetch('http://localhost:9809/teacher')
        .then(response => response.json())
        .then(json => setx(json))
    });

    return (

        <div>
         <table border='1'>
            <tr>
               <th>Name</th>
               <th>ID</th>
               <th>Mob NO</th>
            </tr>
        {
        x && x.map(element => {
          return  <tr> <td>{element.name}</td> <td>{element.id}</td><td>{element.mobno}</td></tr>;
        })}
        </table>
      </div>
      
    )
}