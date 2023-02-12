import { FC } from 'react';
import s from './s_pokemonsWrapper.module.scss';

const PokemonsWrapper: FC = () => {
  return (
    <section className={s.container}>
      <div className={s.wrapper}>pokemons</div>
    </section>
  );
};

export default PokemonsWrapper;
