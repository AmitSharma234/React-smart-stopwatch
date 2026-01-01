import { useState } from "react";

function Onchange1() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comments, setComments] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [shipping, setShipping] = useState("");

  function name1(event) {
    setName(event.target.value);
  }
  function quantity1(event) {
    setQuantity(event.target.value);
  }
  function comments1(event) {
    setComments(event.target.value);
  }
  function paymentMethod1(event) {
    setPaymentMethod(event.target.value);
  }
  function shipping1(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      <input type="text" placeholder="Enter your name" onChange={name1} />
      <p>Name: {name}</p>

      <input type="number" placeholder="Enter quantity" onChange={quantity1} />
      <p>Quantity: {quantity}</p>

      <textarea value={comments} onChange={comments1} />
      <p>Comments: {comments}</p>

      <select value={paymentMethod} onChange={paymentMethod1}>
        <option value="">Select Payment</option>
        <option value="Credit Card">Credit Card</option>
        <option value="PayPal">PayPal</option>
        <option value="Bitcoin">Bitcoin</option>
      </select>
      <p>Payment Method: {paymentMethod}</p>

      <label>
        Standard{" "}
        <input
          type="radio"
          value="Standard"
          checked={shipping === "Standard"}
          onChange={shipping1}
        />
      </label>

      <label>
        Express{" "}
        <input
          type="radio"
          value="Express"
          checked={shipping === "Express"}
          onChange={shipping1}
        />
      </label>
      <p>Shipping: {shipping}</p>
    </>
  );
}

export default Onchange1;
