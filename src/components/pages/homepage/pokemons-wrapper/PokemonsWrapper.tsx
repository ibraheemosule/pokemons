import { FC } from 'react';
import s from './s_pokemonsWrapper.module.scss';
import PokedexCard from './pokedex-card/PokedexCard';

const PokemonsWrapper: FC = () => {
  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <PokedexCard />
        <PokedexCard />
        <PokedexCard />
        <PokedexCard />
        <PokedexCard />
        <PokedexCard />
        <PokedexCard />
        <PokedexCard />
      </div>
    </section>
  );
};

export default PokemonsWrapper;
