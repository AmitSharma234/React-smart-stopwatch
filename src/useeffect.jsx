import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const[total ,settotal] = useState(0);

// Variation 1 => Runs on every render
//   useEffect(() => {
//     alert("Component Mounted");
//   });

// Variation 2 => Runs on only First render
//   useEffect(() => {
//      alert("Component Mounted");
//     },[])

//variation 3 => Runs on Only count will update
// useEffect(()=>{
//     alert("Count Will Be Update");
// },[count])


//variation 4=> Runs on only Count/total will update
// useEffect(()=>{
//    alert("Count/ Toatal Will Be Update");
// },[count,total])


//variation 5 => iss baar use clean up function 
useEffect(()=>{
    alert("Count Will Be Update")
    return()=>{
        alert("Count Is Unmounted from UI")
    }
},[count])


  function handleCount() {
    setCount(count + 1);
  }
   function handletotal() {
    settotal(total + 1);
  }


  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Click Here</button>

      <p>Total: {total}</p>
      <button onClick={handletotal}>Click Here</button>
    </>
  );
}

export default UseEffectDemo;
