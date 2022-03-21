import { Link } from 'react-router-dom'
const FormAb = ({ abilityForm, handleAbility, setAbilityForm, id }) => {
    return (
        <div>
            <form onSubmit={handleAbility}>
                <label htmlFor="name-ability">Name:</label>
                <input
                    type='text'
                    value={abilityForm.name}
                    onChange={e => setAbilityForm({ ...abilityForm, name: e.target.value })}
                    id='name-ability'
                />
                <br />
                <label htmlFor="type-ability">Type:</label>
                <input
                    type='text'
                    value={abilityForm.type}
                    onChange={e => setAbilityForm({ ...abilityForm, type: e.target.value })}
                    id='type-ability'
                />
                <br />

                <input type='submit' />

            </form>
            <br />
            <Link to={`/pokemons/${id}`}>Back</Link>
        </div>
        // <></>
    )
}

export default FormAb