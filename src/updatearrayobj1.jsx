import { useState } from "react";

function UpdateArrayObj1(){

    const [cars, setCars] = useState([]);
    const [caryear, setCarYear] = useState(new Date().getFullYear());
    const [carmake, setCarMake] = useState("");
    const [carmodel, setCarModel] = useState("");

    function Addcar(){
        const newcar = {
            year: caryear,
            make: carmake,
            model: carmodel
        };

        setCars(prevCars => [...prevCars, newcar]);

        // reset inputs correctly
        setCarYear(new Date().getFullYear());  // () is required to CALL the function
        setCarMake("");
        setCarModel("");
    }

    function Removecar(index){
        setCars(prev => prev.filter((_, i) => i !== index));
    }

    function Yearchange(event){
        setCarYear(event.target.value); // NOT setCars
    }

    function Makechange(event){
        setCarMake(event.target.value);
    }

    function Modelchange(event){
        setCarModel(event.target.value);
    }

    return(
        <>
        <h2>List Of Car Objects</h2>

        <ul>
            {cars.map((car, index) =>
                <li key={index} onClick={() => Removecar(index)}>
                    {car.year} {car.make} {car.model}
                </li>
            )}
        </ul>

        <input
            type="number"
            value={caryear}
            onChange={Yearchange}
            placeholder="Enter Year"
        /><br/>

        <input
            type="text"
            value={carmake}
            onChange={Makechange}
            placeholder="Enter Car Make"
        /><br/>

        <input
            type="text"
            value={carmodel}
            onChange={Modelchange}
            placeholder="Enter Car Model"
        /><br/>

        <button onClick={Addcar}>Add Car</button>
        </>
    );
}

export default UpdateArrayObj1;
