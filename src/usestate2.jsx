import { useState } from "react";

function usestate2() {
    const [count, setCount] = useState(0);
  
    function increment() {
        setCount(precount => precount + 1);
        setCount(precount => precount + 1);
    }

    
    function decrement() {
        setCount(count - 1);
    }
    

    function reset() {
        setCount(0);
    }

    return (
        <>
            <div className="box">
                <p>{count}</p>
                <button onClick={increment}>+</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    );
}
export default usestate2;