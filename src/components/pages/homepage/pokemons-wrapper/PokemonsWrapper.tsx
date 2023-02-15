import { FC, Children } from 'react';
import s from './s_pokemonsWrapper.module.scss';
import PokedexCard from './pokedex-card/PokedexCard';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import spinner from '../../../../assets/images/loader.gif';
import { resetSearchError } from '../../../../store/reducers/pokedexReducer';

const PokemonsWrapper: FC = () => {
  const dispatch = useAppDispatch();
  const { paginatedList } = useAppSelector(({ pokemons }) => pokemons);
  const { searchError, searching } = useAppSelector((state) => state.pokedex);

  const showLoadingSpinner = (
    <div className={s.spinner}>
      <img src={spinner} alt="loading spinner" />
    </div>
  );

  const renderPokemonList = Children.toArray(
    paginatedList.map((pokedex) => <PokedexCard pokedex={pokedex} />)
  );

  const pokedexNotFound = (
    <div className={s.error}>
      <h3>Pokedex Not Found</h3>
      <button onClick={() => dispatch(resetSearchError())}>
        Show All Pokemons
      </button>
    </div>
  );

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        {searching
          ? showLoadingSpinner
          : searchError || !paginatedList.length
          ? pokedexNotFound
          : renderPokemonList}
      </div>
    </section>
  );
};

export default PokemonsWrapper;
