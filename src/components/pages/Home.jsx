import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            Hi from Home
            <br />
            <Link to='/pokemons'> See all pokemons </Link>
        </>
    )
}

export default Home