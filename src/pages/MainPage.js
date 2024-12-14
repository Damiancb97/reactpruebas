import { Link } from 'react-router-dom';
import Bienvenida from "../components/Bienvenida";
import SimpleButton from "../components/buttons/SimpleButton.js";
import AlternatorButton from "../components/buttons/AlternatorButton.js";
import SimpleAlternator from "../components/buttons/SimpleAlternator.js";




const MainPage = (props) => {
    return <div>
        {/* <h2>HOLA BUENAS</h2> 
         <Bienvenida /> 

        <h2>Botón Simple</h2>
        <SimpleButton />

        <h2>Botón alternador</h2>
        <AlternatorButton />*/}

        <h2>Alternador Simple</h2>
        <SimpleAlternator />

        <h2>JUEGOS</h2>
        <Link to="/Games"><button>Entrar</button></Link>




    </div>
}

export default MainPage;