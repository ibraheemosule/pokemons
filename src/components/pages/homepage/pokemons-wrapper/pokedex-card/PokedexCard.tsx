import { FC } from 'react';
import s from './s_pokedexCard.module.scss';
import pokemonImage from '../../../../../assets/images/pokemon.jpg';
import { Link } from 'react-router-dom';

const PokedexCard: FC = () => {
  return (
    <Link to="/pokedex" className={s.card}>
      <img src={pokemonImage} alt="pokemon" />
      <div className={s.card_backdrop} />
      <div className={s.card_view}>
        <p>
          View <span />
        </p>
      </div>
      <div className={s.card_content__wrapper}>
        <h3>Crabominable</h3>
        <span>Fire</span>
      </div>
    </Link>
  );
};

export default PokedexCard;
