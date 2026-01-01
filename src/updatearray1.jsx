import { useState } from "react";

function updatearray1(){
const [food,setfood] = useState(["Banana","Apple","Mango"]);

function addfood(){
const newfood = document.getElementById('foodinput').value;
document.getElementById('foodinput').value = "";
setfood(f=>[...f,newfood]);
}

function deletefood(index){
    setfood(food.filter((_,i)=>i!==index));
}

return(
    <>
    <h2>List Of Food</h2>
    <ul>
    {food.map((food,index)=><li key={index} onClick={()=>deletefood(index)}>{food}       </li>)}
    </ul>
    <input type="text" id="foodinput" placeholder="Enter Food"/>
    <button onClick={addfood}>Add Array</button>
    </>
);


}
export default updatearray1;