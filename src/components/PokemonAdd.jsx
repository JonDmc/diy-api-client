import { useState } from "react";
import axios from "axios";
import Form from "./Form";

const PokemonAdd = ({ pokemon }) => {

    const [pokemonForm, setPokemonForm] = useState([])

    const handlePokemon = e => {
        // e.preventDefault()

        // axios.method(url, request body, options)
        axios.post(`${process.env.REACT_APP_SERVER_URL}/pokemons`, pokemonForm)
            .then(response => {

                setPokemonForm(pokemonForm)
            })
            .catch(console.log)

    }
    return (
        <>
            <h1>Add Pokemon</h1>
            <Form
                pokemonForm={pokemonForm}
                handlePokemon={handlePokemon}
                setPokemonForm={setPokemonForm}
            />
        </>
    )
}

export default PokemonAdd