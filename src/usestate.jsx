import { useState } from "react";
function UseState(){
const [text,Settext]=useState("Hello");

return(
    <>
    <h1>{text}</h1>
    <button onClick={()=>Settext("Welcome to React")}>Click Me</button>
    </>
);
}
export default UseState