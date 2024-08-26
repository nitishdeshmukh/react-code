export default function Data(){
    var x=[];
    for (var i=1;i<=10;i++){
        x.push(i);
    }
    var p=x.map((k)=>
        <option>{k}</option>
    );
    return(
        <select>
            {p}
        </select>
    );
}