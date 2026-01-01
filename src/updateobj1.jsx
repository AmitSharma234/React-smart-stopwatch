import { useState } from "react";

function Updateobj1() {
 
  const [car, setCar] = useState({
    name: "Mustang",
    year: 2002,
    model: "Ford"
  });

  function HandleYear(event) {
    setCar(prev => ({ ...prev, year: event.target.value }));
  }

  function HandleName(event) {
    setCar(prev => ({ ...prev, name: event.target.value }));
  }

  function HandleModel(event) {
    setCar(prev => ({ ...prev, model: event.target.value }));
  }

  return (
    <>
      <p>Your Favorite Car Is: {car.year} {car.model} {car.name}</p>

      <input
        type="number"
        placeholder="Enter Year"
        onChange={HandleYear}
      />

      <input
        type="text"
        placeholder="Enter Name"
        onChange={HandleName}
      />

      <input
        type="text"
        placeholder="Enter Model"
        onChange={HandleModel}
      />
    </>
  );
}

export default Updateobj1;
