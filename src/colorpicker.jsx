import { useState } from "react";

function Colorpicker() {
    const [color, setColor] = useState("#000000");

    function colorpick(event) {
        setColor(event.target.value);
    }

    return (
        <div>
            <input type="color" value={color} onChange={colorpick} />
            <p>Selected Color: {color}</p>
        </div>
    );
}
export default Colorpicker;