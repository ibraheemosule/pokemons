import { FC } from 'react';
import s from './s_form.module.scss';
import pokemonImage from '../../../../assets/images/pokemon.jpg';

const Form: FC = () => {
  return (
    <div className={s.form}>
      <button>
        <img src={pokemonImage} alt="pokemon" />
      </button>
      <button>
        <img src={pokemonImage} alt="pokemon" />
      </button>
      <button>
        <img src={pokemonImage} alt="pokemon" />
      </button>
      <button>
        <img src={pokemonImage} alt="pokemon" />
      </button>
    </div>
  );
};

export default Form;
