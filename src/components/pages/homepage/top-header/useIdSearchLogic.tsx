import { useRef, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setPokemonList } from '../../../../store/reducers/pokemonsReducer';
import { getPokedex } from '../../../../store/reducers/apiCalls';

export const useIdSearchLogic = (searchValue: string) => {
  const dispatch = useAppDispatch();
  const { immutablePokemonsList } = useAppSelector((state) => state.pokemons);
  const { searchByIdResult, pokedexDetailsList } = useAppSelector(
    (state) => state.pokedex
  );
  const abortFetch = useRef<unknown>();

  //get list of previously fetched pokedex details and group them by id and name
  const idOfPokedexInStore = useMemo(() => {
    let idList = {};
    for (const [name, pokedex] of Object.entries(pokedexDetailsList)) {
      idList = { ...idList, [pokedex.id]: name };
    }

    return idList;
  }, [JSON.stringify(pokedexDetailsList)]);

  useEffect(() => {
    //cancel previous fetch if it is still in progress
    if (typeof abortFetch.current === 'function') abortFetch.current();
    if (!Number(searchValue)) return;

    const id = searchValue as keyof typeof idOfPokedexInStore;

    // if pokedex already exists in the store, use it and skip the refetch
    if (idOfPokedexInStore[id]) {
      const filteredList = immutablePokemonsList.filter(
        (poke) => poke.name === idOfPokedexInStore[id]
      );

      dispatch(setPokemonList(filteredList));
      return;
    }

    // delay pokemon search by id query by 500ms to
    //enable the users finish typing the id before fetching.
    const delayPokemonIdSearch = setTimeout(async () => {
      const data = dispatch(getPokedex(`/${searchValue}`));
      abortFetch.current = data.abort;
    }, 500);

    return () => clearTimeout(delayPokemonIdSearch);
  }, [searchValue]);

  //update the pokemonList array with the result of the searched value
  useEffect(() => {
    if (Number(searchValue)) {
      dispatch(setPokemonList(searchByIdResult));
    }
  }, [JSON.stringify(searchByIdResult)]);
};
