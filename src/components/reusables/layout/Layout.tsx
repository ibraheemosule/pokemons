import {
  FC,
  ReactElement,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react';
import Navbar from './navbar/Navbar';
import s from './s_layout.module.scss';
import { IDataResponse, PokemonListType } from '../../../utils/ts-types';
import useFetch from '../hooks/useFetch';
import { getPokemons } from '../../../store/reducers/apiCalls';
import { fetchPokemonsList } from '../../../store/reducers/pokemonsReducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import Loader from '../loader/Loader';

const Layout: FC<ILayout> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.pokemons);
  const [url, setUrl] = useState<string>();
  const {
    data,
    error: fetchError,
    error: fetching,
    setData,
  } = useFetch<IDataResponse>(url);
  const allPokemon = useRef<PokemonListType[]>([]);
  const offset = useRef(0);

  useLayoutEffect(() => {
    dispatch(getPokemons('pokemon/?limit=8'));
  }, []);

  useEffect(() => {
    if (data === null) {
      offset.current = 0;
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

  const retryFetch = () => setData(null);

  return (
    <main className={s.layout}>
      {loading ? (
        <div className={s.loading}>
          <Loader width="80px" />
        </div>
      ) : error ? (
        <h4 className={s.error}>An Error Ocurred, Refresh Page</h4>
      ) : (
        <>
          <div
            className={`${s.all_pokemon_fetch} ${fetching && s.show} ${
              data !== null && data?.results.length && s.show
            } ${data !== null && !data?.results.length && s.hide}`}
          >
            {fetchError ? (
              <div>
                <span>list incomplete!</span>{' '}
                <button onClick={retryFetch}>Retry</button>
              </div>
            ) : (
              'loading all pokemons'
            )}
          </div>
          <Navbar />
          {children}
        </>
      )}
    </main>
  );
};

interface ILayout {
  children: ReactElement;
}

export default Layout;
