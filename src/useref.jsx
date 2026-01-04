import { useState,useEffect } from "react";

function useref(){
const [count,setCount]=useState(0);
let value=0;

useEffect(()=>{
    console.log("Count value changed:",count);
})

function increment(){
    value=value+1;
    console.log("Value:",value);
    setCount(count+1);
}
    return(
        <div>
            <h1>Count: {count}</h1> 
            <button onClick={increment}>Increment Count</button>
        </div>
    );
}
export default useref;