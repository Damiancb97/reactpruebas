import { Link } from 'react-router-dom';
// import "../components/css/Games.css";

const Games = (props) => {
    return <div>
        <div><Link to="/Games/tresenraya"><button>JUEGO 1</button></Link></div>
        <div><Link to="/Games/combatepokemon"><button>JUEGO 2</button></Link></div>
        <div><button>JUEGO 3</button></div>
        <div><button>JUEGO 4</button></div>
    </div>
}

export default Games;