import { FC, Children } from 'react';
import s from './s_pokemonsWrapper.module.scss';
import PokedexCard from './pokedex-card/PokedexCard';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { setSearchError } from '../../../../store/reducers/pokedexReducer';
import { resetPokemonList } from '../../../../store/reducers/pokemonsReducer';
import ErrorCard from '../../../reusables/error-card/ErrorCard';
import Loader from '../../../reusables/loader/Loader';

const PokemonsWrapper: FC = () => {
  const dispatch = useAppDispatch();
  const { paginatedList } = useAppSelector(({ pokemons }) => pokemons);
  const { searchError, searching } = useAppSelector((state) => state.pokedex);

  const resetList = () => {
    dispatch(setSearchError(''));
    dispatch(resetPokemonList());
  };

  const renderPokemonList = Children.toArray(
    paginatedList.map((pokedex) => <PokedexCard pokedex={pokedex} />)
  );

  const pokedexNotFound = (
    <ErrorCard
      errMessage={searchError}
      onBtnClick={resetList}
      btnText="show all pokemons"
    />
  );

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        {searching ? (
          <Loader width="70px" />
        ) : searchError || !paginatedList.length ? (
          pokedexNotFound
        ) : (
          renderPokemonList
        )}
      </div>
    </section>
  );
};

export default PokemonsWrapper;
