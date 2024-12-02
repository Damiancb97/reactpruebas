import { useState } from "react"

const SimpleButton = () => {

    const [state, SetState] = useState("Hola buenas");

    const modificacion = () => {
        SetState("que tal")
    }
    return <div>
        <h3>Propiedad: {state}</h3>
        {/* <button onClick={() => { SetState("Que tál?"); }}>BotónSimple</button> */}
        <button onClick={modificacion}>BotónSimple</button>
    </div >
}
export default SimpleButton;