
const PokemonDetails = ({ pokemon, abilities }) => {

    const pokeAbilities = abilities.map((ability, idx) => {
        return (
            <div className="disp-ability">
                <h3>Name: {ability.name}</h3>
                <h3>Type: {ability.type}</h3>
            </div>
        )
    })

    return (
        <>
            <h1>Pokemon Details</h1>

            <h2>{pokemon.name}</h2>
            <h3>Type:</h3> {pokemon.type}
            <h3>Weakness:</h3> {pokemon.weakness}
            <h3>Status: </h3>
            {!pokemon.captured ? <h3>...still in the Wild!</h3> : <h3>Captured</h3>}
            <h3>Abilities: </h3> {pokeAbilities}
        </>
    )
}

export default PokemonDetails