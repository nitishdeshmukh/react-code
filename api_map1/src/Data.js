export default function Data(){
    var x=[10,20,30,40];
    var p=x.map((k)=>
         <li>{k}</li>
    );
    return(
        <ul>
            {p}
        </ul>
    );
}