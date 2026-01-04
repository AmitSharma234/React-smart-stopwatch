import { useState, useEffect, useRef } from "react";

function UseRefExample() {
  const [count, setCount] = useState(0);
  const value = useRef(0);

  useEffect(() => {
    console.log("Count value changed:", count);
  }, [count]);

  function increment() {
    value.current += 1;
    console.log("useRef value:", value.current);
    setCount(prev => prev + 1);
  }

  function colorChange() {

  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment Count</button>
        <button onClick={colorChange}>Change Color</button>

    </div>
  );
}

export default UseRefExample;
