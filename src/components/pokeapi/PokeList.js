import axios from "axios";
import { useEffect, useState } from "react";

const PokeList = ({ selectPokemon, selectedPokemons }) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const requests = [];
                for (let i = 1; i <= 151; i++) {
                    requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
                }
                const responses = await Promise.all(requests);
                const pokemonData = responses.map((response) => ({
                    id: response.data.id, //obtienes la id que la guardas con pokemon.id
                    name: response.data.name, //obtienes el nombre que lo guardas con variable pokemon.name
                    hp: response.data.stats[0].base_stat,
                    attack: response.data.stats[1].base_stat,
                    defense: response.data.stats[2].base_stat,
                    image: response.data.sprites.front_default
                }));
                setPokemons(pokemonData);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) return <p>Cargando Pokémon...</p>;

    return (
        <div>
            <h1>Lista de Pokémon</h1>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                        <p><ul>
                            <img src={pokemon.image} onClick={() => selectPokemon({ pokeId: pokemon.id, pokeArray: selectedPokemons })} />
                            <li>Núm en Pokedex: {pokemon.id}</li>
                            <li>Nombre: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
                            <li>Hp: {pokemon.hp}</li>
                            <li>Attack: {pokemon.attack}</li>
                            <li>Defense: {pokemon.defense}</li>
                        </ul>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokeList;
