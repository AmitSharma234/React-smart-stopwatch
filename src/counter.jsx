import { useState } from "react";
function counter(){

    const[count,setCount]= useState(0);

function Increment(){ setCount(count+1); }
function Decrement(){ setCount(count-1); }
function Reset(){ setCount(0) };

return(
<>
<h1>You Will Clicked {count} </h1>
<button onClick={Increment}>Incrment</button>
<button onClick={Decrement}>Decrement</button>
<button onClick={Reset}>Reset</button>
</>);
}
export default counter