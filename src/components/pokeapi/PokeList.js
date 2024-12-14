import Pokemon from "./Pokemon";
import { Link } from 'react-router-dom';

const PokeList = () => {
    const pokeIds = [1, 2, 3, 4, 5]; // IDs de Pokémon a mostrar

    return (
        <div>
            <h1>Lista de Pokémon</h1>
            <ul>
                {pokeIds.map((id) => (
                    <li key={id}>
                        <Link to={`/{Pokemon}/${id}`}>
                            Ver Pokémon {id}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokeList;
