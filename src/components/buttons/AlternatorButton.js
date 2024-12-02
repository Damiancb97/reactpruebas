import { useState } from "react";

const AlternatorButton = (props) => {

    const [state, SetState] = useState(false);

    const handleToggle = () => {
        SetState(!state)
    }

    return <div>
        <h3>{state ? 1 : 2}</h3>
        <button onClick={handleToggle}>Buenas</button>
    </div >
}

export default AlternatorButton; 