import { useState } from "react";

const SimpleAlternator = () => {

    const [text, setText] = useState("No");

    const alternarText = () => {
        if (text === "No") {
            setText("yes");
        } else {
            setText("No");
        }
    }

    const alternarEnClick = () => {
        alternarText();
    }

    return <div>
        <h3>Texto: {text}</h3>
        <button onClick={alternarEnClick}>Botón</button>
    </div >
}

export default SimpleAlternator;