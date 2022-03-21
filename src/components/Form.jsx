import { useState } from 'react'
import axios from 'axios'

const Form = ({ pokemonForm, handlePokemon, setPokemonForm }) => {

    return (
        <div>
            <form onSubmit={handlePokemon}>
                <label htmlFor='name-pokemon'>Name:</label>
                <input
                    type='text'
                    value={pokemonForm.name}
                    onChange={e => setPokemonForm({ ...pokemonForm, name: e.target.value })}
                    id='name-pokemon'
                />
                <br />
                <label htmlFor='type-ability'>Type:</label>
                <input
                    type='text'
                    value={pokemonForm.type}
                    onChange={e => setPokemonForm({ ...pokemonForm, type: e.target.value })}
                    id='type-pokemon'
                />
                <br />
                <label htmlFor='weakness'>Weakness:</label>
                <input
                    type='text'
                    value={pokemonForm.weakness}
                    onChange={e => setPokemonForm({ ...pokemonForm, weakness: e.target.value })}
                    id='weakness'
                />
                <br />
                <label htmlFor='captured'>Captured:</label>
                <input
                    type='text'
                    value={pokemonForm.captured}
                    onChange={e => setPokemonForm({ ...pokemonForm, captured: e.target.value })}
                    id='captured'
                />
                <br />
                <input type='submit' />
            </form>
            <br />
        </div>
    )
}

export default Form