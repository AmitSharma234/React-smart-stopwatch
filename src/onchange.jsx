import { useState } from "react";

function onchange(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comments, setComments] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [shipping, setShipping] = useState("");
    
    
    function handleChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentsChange(event){
        setComments(event.target.value);
    }
    function handlePaymentMethodChange(event){  
        setPaymentMethod(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }   

    return(
        <>
        <input type="text" placeholder="Enter your name" onChange={handleChange} />
        <p>Name: {name}</p>
        <input type="number" placeholder="Enter quantity" onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>

        <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
        <p>Comments: {comments}</p>

        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bitcoin">Bitcoin</option>
        </select>
        <p>Payment Method: {paymentMethod}</p>

        <label>
            Standard<input type="radio" value="Standard" checked={shipping === "Standard"} onChange={handleShippingChange} />
        </label>
        <label>
            Express<input type="radio" value="Express" checked={shipping === "Express"} onChange={handleShippingChange} />
        </label>
        <p>Shipping: {shipping}</p>
        </>
    );
}
export default onchange