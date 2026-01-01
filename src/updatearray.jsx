import { useState } from "react";

function updatearray(){

    const[food,setfood] = useState(["banana","Apple","Mango"]);

    function addfood(){
        const newfood = document.getElementById('foodinput').value;
        document.getElementById("foodinput").value = "";

        setfood(f=>[...f,newfood]);
    }

    function removefood(index){
        setfood(food.filter((_,i)=> i!== index));
    }
 
    return(
        <>
        <h2>List Of Food</h2>
        <ul>
        {food.map((food,index)=><li key={index} onClick={()=>removefood(index)}>{food}</li>)}
        </ul>
        <input type="text"  id="foodinput"   placeholder="Enter Food Item"/>
        <button onClick={addfood}>Add Food</button>
        </>
    );
}
export default updatearray