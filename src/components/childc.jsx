import { datapass } from "../usecontext";
import { useContext } from "react";

function ChildC() {
const value = useContext(datapass);
  return (
    <div>
      <p>Name: {value.name}</p>
      <p>Age: {value.age}</p>
    </div>
  );
}
export default ChildC;