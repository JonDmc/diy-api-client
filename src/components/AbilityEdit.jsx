import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Form from './Form'
import FormAb from './FormAb'

const AbilityEdit = ({ ability }) => {

    const [abilityForm, setAbilityForm] = useState([])
    const { id } = useParams()

    const handleAbility = e => {
        e.preventDefault()

        axios.put(`${process.env.REACT_APP_SERVER_URL}/abilities/${id}`, abilityForm)
            .then(response => {
            })
            .catch(console.log)
    }

    return (
        <>
            Edit an ability
            <FormAb
                handleAbility={handleAbility}
                abilityForm={abilityForm}
                setAbilityForm={setAbilityForm}
            />
        </>
    )
}

export default AbilityEdit