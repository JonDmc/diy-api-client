import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PokemonAdd from '../PokemonAdd'

const PokemonAll = ({ pokemons }) => {

    const [showForm, setShowForm] = useState(false)

    const pokeLinks = pokemons.map((pokemon, idx) => {
        return (
            <div key={`pokelink-${idx}`}>
                <Link to={`/pokemons/${pokemon._id}`}>{pokemon.name}</Link>
            </div>
        )
    })

    return (
        <>
            This is where all the pokemons will show up
            {pokeLinks}
            <PokemonAdd
                showForm={showForm}
                setShowForm={setShowForm}
                pokemon={pokemons}
            />
        </>
    )
}

export default PokemonAll