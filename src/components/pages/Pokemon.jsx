import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import PokemonDetails from "../PokemonDetails"
import PokemonEdit from "../PokemonEdit"

const Pokemon = ({ pokemons }) => {

    const [showForm, setShowForm] = useState(false)
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    const [ability, setAbility] = useState([])


    //get data from backend -> details of specific pokemon
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/pokemons/${id}`)
            .then(response => {
                setPokemon(response.data)
            })
            .catch(console.log)

    }, [showForm])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/pokemons/${id}/ability`)
            .then(response => {
                setAbility(response.data)
            })
            .catch(console.log)

    }, [showForm])

    const deletePokemon = () => {

        axios.delete(`${process.env.REACT_APP_SERVER_URL}/pokemons/${id}`)
            .then(response => {
                console.log('success')
            })
            .catch(console.log)

    }

    return (
        <>
            This page will show individual pokemon
            {showForm ?
                <PokemonEdit pokemon={pokemon} setShowForm={setShowForm} showForm={showForm} /> :
                <PokemonDetails pokemon={pokemon} abilities={ability} setShowForm={setShowForm} showForm={showForm} />
            }
            <button onClick={() => setShowForm(!showForm)}>{showForm ? 'exit' : 'Edit Details'}</button>

            <Link to='/pokemons'>
                <button onClick={() => deletePokemon()}>Delete Pokemon</button>
            </Link>
            <br />
            <div> <Link to='/pokemons'>Back</Link></div>
        </>
    )
}

export default Pokemon