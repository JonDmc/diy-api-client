import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import FormAb from './FormAb'

const AbilityAdd = ({ pokemons }) => {

    const { id } = useParams()
    const [abilityForm, setAbilityForm] = useState([])

    const handleAbility = e => {
        e.preventDefault()
        console.log('hello')
        axios.post(`${process.env.REACT_APP_SERVER_URL}/pokemons/${id}/ability`, abilityForm)
            .then(response => {
                setAbilityForm(abilityForm)
            })
            .catch(console.log)
    }

    return (
        <>
            Add ability
            <FormAb
                abilityForm={abilityForm}
                setAbilityForm={setAbilityForm}
                handleAbility={handleAbility}
                id={id}
            />
        </>
    )
}

export default AbilityAdd