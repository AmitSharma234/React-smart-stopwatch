import { DataContext } from "../usecontext1";
import { useContext } from "react";

function CC3(){
    const {Theme,setTheme}=useContext(DataContext);

    function toggleTheme(){
        if(Theme.coloe==="Light Mode"){
            setTheme({coloe:"Dark Mode"});
        }
        else{
            setTheme({coloe:"Light Mode"});
        }
    }
    return(
        <div>
            <h1>Current Theme: {Theme.coloe}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}
export default CC3