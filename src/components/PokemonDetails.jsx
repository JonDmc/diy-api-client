import { Link } from "react-router-dom"
import Abilities from "./Abilities"

const PokemonDetails = ({ pokemon, abilities }) => {

    return (
        <>
            <h1>Pokemon Details</h1>

            <h2>{pokemon.name}</h2>
            <h3>Type:</h3> {pokemon.type}
            <h3>Weakness:</h3> {pokemon.weakness}
            <h3>Status: </h3>
            {!pokemon.captured ? <p>...still in the Wild!</p> : <p>Captured</p>}
            <hr />
            <Abilities abilities={abilities} />
            <Link to={`/pokemons/${pokemon._id}/abilities`}>Add Abilities</Link>
            {/* <button>Add</button> */}
            <hr />

        </>
    )
}

export default PokemonDetails