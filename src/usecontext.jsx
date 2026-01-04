import { useState,createContext } from "react";
import ChildA from "./components/childa.jsx";

const datapass = createContext();

function UseContext() {
  const [user,setUser] = useState({name:"Amit Sharma",age:24});

  return (
    <datapass.Provider value={user}>
        <ChildA />  
    </datapass.Provider>
  );
} 
export {datapass};
export default UseContext;