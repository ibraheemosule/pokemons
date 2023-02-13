import { FC, Children } from 'react';
import s from './s_pokemonsWrapper.module.scss';
import PokedexCard from './pokedex-card/PokedexCard';
import { useAppSelector } from '../../../../store/hooks';

const PokemonsWrapper: FC = () => {
  const pokemonList = useAppSelector((state) => state.data.pokemonsList);

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        {Children.toArray(
          pokemonList.map((pokedex) => <PokedexCard pokedex={pokedex} />)
        )}
      </div>
    </section>
  );
};

export default PokemonsWrapper;
