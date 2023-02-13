import { FC } from 'react';
import s from './s_pokedexCard.module.scss';
import { Link } from 'react-router-dom';

const PokedexCard: FC = () => {
  return (
    <Link to="/pokedex" className={s.card}>
      <img
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        }
        alt="pokemon"
      />
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
