import { useEffect } from 'react';
import Layout from './components/reusables/layout/Layout';
import { getPokemons } from './store/reducers/apiCalls';
import { useAppDispatch } from './store/hooks';
import { getAllPokemons } from './utils';
import { initializePokemonsList } from './store/reducers/pokemonsReducer';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPokemons('/?limit=150'));

    (async () => {
      const allPokemons = await getAllPokemons();
      dispatch(initializePokemonsList(allPokemons));
    })();
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
