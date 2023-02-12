import { FC } from 'react';
import s from './s_pokedexCard.module.scss';
import pokemonImage from '../../../../../assets/images/pokemon.jpg';

const PokedexCard2: FC = () => {
  return (
    <button className={s.card}>
      <img src={pokemonImage} alt="pokemon" />
      <div className={s.card_backdrop}></div>
      <div className={s.card_view}>
        <p>
          view <span></span>
        </p>
      </div>
      <div className={s.card_content__wrapper}>
        <h3>Crabominable</h3>
        <span>Fire</span>
      </div>
    </button>
  );
};

export default PokedexCard2;
