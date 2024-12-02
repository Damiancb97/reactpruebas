import "../css/PageGame.css";
import { useState } from "react"

const PutCross = (props) => {

    const [cross, SetCross] = useState(false)

    const handleCross = () => {
        SetCross(!cross)
    }

    return <div>
        <li onClick={handleCross}>{cross ? "X" : "_"}</li>
    </div >

}
export default PutCross;