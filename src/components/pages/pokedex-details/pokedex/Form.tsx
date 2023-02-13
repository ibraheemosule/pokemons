import { Dispatch, FC, memo, SetStateAction } from 'react';
import s from './s_form.module.scss';
import pokemonImage from '../../../../assets/images/pokemon.jpg';
import logo from '../../../../assets/images/logo.png';

const Form: FC<FormProps> = ({ setImage }) => {
  return (
    <div className={s.form}>
      <button onClick={() => setImage(logo)}>
        <img src={pokemonImage} alt="pokemon" />
      </button>
      <button onClick={() => setImage(pokemonImage)}>
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

interface FormProps {
  setImage: Dispatch<SetStateAction<string>>;
}

export default memo(Form);
