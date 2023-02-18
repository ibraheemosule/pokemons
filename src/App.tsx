import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Layout from './components/reusables/layout/Layout';
import { getPokemons } from './store/reducers/apiCalls';
import { useAppDispatch } from './store/hooks';

import { fetchPokemonsList } from './store/reducers/pokemonsReducer';
import useFetch from './components/reusables/hooks/useFetch';
import { useAppSelector } from './store/hooks';

import Loader from './components/reusables/loader/Loader';
import { PokemonListType } from './utils/ts-types';

function App() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.pokemons);
  const [url, setUrl] = useState('pokemon/?limit=10');
  const {
    loading: fetching,
    data,
    error: fetchError,
  } = useFetch<IDataResponse>(url);
  const allPokemon = useRef<PokemonListType[]>([]);
  const offset = useRef(0);

  useLayoutEffect(() => {
    dispatch(getPokemons('pokemon/?limit=8'));
  }, []);

  useEffect(() => {
    if (data === null) {
      setUrl(`pokemon/?limit=500&offset=${offset.current}`);
      return;
    }
    if (!data?.results && data !== null) {
      return;
    }
    if (data?.results.length) {
      allPokemon.current = [...allPokemon.current, ...data.results];
      dispatch(fetchPokemonsList(allPokemon.current));
      offset.current += 500;
      setUrl(`pokemon/?limit=500&offset=${offset.current}`);
    }
  }, [JSON.stringify(data)]);

  return (
    <div className="App">
      {loading ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Loader width="80px" />
        </div>
      ) : fetchError ? (
        <h4>An Error Ocurred, Refresh Page</h4>
      ) : (
        <Layout />
      )}
    </div>
  );
}

interface IDataResponse {
  results: PokemonListType[];
  next: string;
}

export default App;
