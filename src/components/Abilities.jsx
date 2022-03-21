import { useState } from 'react'
import PokemonDetails from './PokemonDetails'
import AbilityEdit from './AbilityEdit'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Abilities = ({ abilities }) => {

    const [showForm, setShowForm] = useState(false)
    const { id } = useParams()

    const deleteAbility = (abilityId) => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/abilities/${abilityId}`)
            .then(response => {
                console.log("success")
            })
            .catch(console.log)
    }

    const pokeAbilities = abilities.map((ability, idx) => {
        return (
            <div className="disp-ability" key={idx}>
                <h3>Name:</h3> <p> {ability.name}</p> <br />
                <h3>Type:</h3> <p> {ability.type}</p> <br />
                <Link to={`/abilities/${ability._id}`}><button>Edit</button></Link>
                <Link to={`/pokemons/${id}`}>
                    <button onClick={() => deleteAbility(ability._id)}>Delete</button>
                </Link>
            </div>
        )
    })

    return (
        <>
            <h3>Abilities: </h3> {pokeAbilities}
        </>
    )
}

export default Abilities