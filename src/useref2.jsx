import { useState,useRef } from "react";

function useref2(){
const [count,setCount]=useState(0);
const btnref=useRef();

function increment(){
    setCount(count+1);
}
function colorChange(){
    btnref.current.style.backgroundColor="blue";
}
    return(
        <div>
            <h1>Count: {count}</h1> 
            <button onClick={increment}>Increment Count</button>
            <button ref={btnref} onClick={colorChange}>Change Color</button>
        </div>
    );
}
export default useref2;