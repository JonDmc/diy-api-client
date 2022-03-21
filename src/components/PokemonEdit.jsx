import { useState } from 'react'
import axios from 'axios'
import Form from './Form'

const PokemonEdit = ({ pokemon, showForm, setShowForm }) => {

    const [pokemonForm, setPokemonForm] = useState([])

    const handlePokemon = e => {
        e.preventDefault()

        //axios.method(url, request body, options)
        axios.put(`${process.env.REACT_APP_SERVER_URL}/pokemons/${pokemon._id}`, pokemonForm)
            .then(response => {
                // to know if the backend was successful in updating the form
                setShowForm(!showForm)
            })

    }
    return (
        <>
            <h1>Edit Pokemon</h1>
            <Form
                pokemonForm={pokemonForm}
                handlePokemon={handlePokemon}
                setPokemonForm={setPokemonForm}
            />

        </>
    )
}

export default PokemonEdit