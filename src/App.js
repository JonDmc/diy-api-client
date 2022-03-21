import './App.css';
import axios from 'axios';
import Home from './components/pages/Home';
import Pokemon from './components/pages/Pokemon';
import PokemonAll from './components/pages/PokemonAll';
import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_URL + '/pokemons')
      .then(response => {
        setPokemons(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, []) // empty dependency -> running once when the page loads

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact path='/'
            element={<Home />}
          />
          <Route
            exact path='/pokemons'
            element={<PokemonAll pokemons={pokemons} />}
          />
          <Route
            path='/pokemons/:id'
            element={<Pokemon pokemons={pokemons} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
