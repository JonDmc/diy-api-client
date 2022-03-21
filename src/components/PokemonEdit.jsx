import { useState } from 'react'
import axios from 'axios'
import Form from './Form'

const PokemonEdit = ({ pokemon, showForm, setShowForm, abilities }) => {

    const [pokemonForm, setPokemonForm] = useState([])
    const [abilityForm, setAbilityForm] = useState([])

    const handlePokemon = e => {
        e.preventDefault()

        //axios.method(url, request body, options)
        axios.put(`${process.env.REACT_APP_SERVER_URL}/pokemons/${pokemon._id}`, pokemonForm)
            .then(response => {
                // to know if the backend was successful in updating the form
                setShowForm(!showForm)
            })

    }

    const handleAbility = e => {
        e.preventDefault()

        axios.put(`${process.env.REACT_APP_SERVER_URL}/abilities/${abilities._id}`, abilityForm)
            .then(response => {
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