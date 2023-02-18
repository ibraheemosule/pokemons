import { useEffect } from 'react';
import Layout from './components/reusables/layout/Layout';
import { getPokemons } from './store/reducers/apiCalls';
import { useAppDispatch } from './store/hooks';
import { getAllPokemons } from './utils';
import { fetchPokemonsList } from './store/reducers/pokemonsReducer';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPokemons('pokemon/?limit=8'));
    (async () => {
      const allPokemons = await getAllPokemons();
      dispatch(fetchPokemonsList(allPokemons));
    })();
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
