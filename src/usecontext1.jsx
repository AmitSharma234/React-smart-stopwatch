import {useState,createContext} from 'react';
import CC1 from './components1/cc1';;

const data = createContext();

function UseContext() {
    const [Theme,setTheme]=useState({coloe:"Light Mode"});
    return (
        <data.Provider value={{Theme,setTheme}}>
            <CC1 />
        </data.Provider>
    );
}
export {DataContext};
export default UseContext;
