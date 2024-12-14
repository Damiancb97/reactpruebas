import PokeList from "../components/pokeapi/PokeList";
import Pokemon from "../components/pokeapi/Pokemon";


const CombatPokemon = (props) => {
    const pokeArray = [];
    const PokeRival = [];

    const handleSelect = ({ pokeId, pokeArray }) => {
        if (pokeArray.length < 6) {
            pokeArray.push(pokeId);
            console.log(pokeId);
        }
    }

    const arrayRival = ({ pokeId, pokeRivel }) => {
        while (newRivalTeam.length < 6) {
            const randomId = Math.floor(Math.random() * 151) + 1;
            if (!newRivalTeam.includes(randomId)) {
                newRivalTeam.push(randomId);
            }
        }
    }

    return <>
        {/* <Pokemon /> */}

        <PokeList selectPokemon={handleSelect} selectedPokemons={pokeArray} />

    </>
}

export default CombatPokemon;

