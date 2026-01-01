import { useState } from "react";
import "./ss.css";   
function A1() { 
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="box">
                <p>{count}</p>
                <button className="btn" onClick={() => setCount(count + 1)}>+</button>
                <button className="btn" onClick={() => setCount(0)}>Reset</button>
                <button className="btn" onClick={() => setCount(count - 1)}>-</button>
            </div>
        </>
    );
}
export default A1