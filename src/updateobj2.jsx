import { useState } from "react";

function Updateobj2() {

  const [car, setCar] = useState({
    year: 2022,
    model: "Mustang",
    Company: "Ford"
  });

  function Handley(event) {
    setCar(prev => ({ ...prev, year: event.target.value }));
  }

  function Handlecompany(event) {
    setCar(prev => ({ ...prev, Company: event.target.value }));
  }

  function Handlemodel(event) {
    setCar(prev => ({ ...prev, model: event.target.value }));
  }

  return (
    <>
      <p>
        Your Favorite Car is: <b>{car.model}</b> since <b>{car.year}</b>, Company: <b>{car.Company}</b>
      </p>

      <input
        type="number"
        onChange={Handley}
        placeholder="Enter Year"
      />

      <input
        type="text"
        onChange={Handlecompany}
        placeholder="Enter Company"
      />

      <input
        type="text"
        onChange={Handlemodel}
        placeholder="Enter Model"
      />
    </>
  );
}

export default Updateobj2;
