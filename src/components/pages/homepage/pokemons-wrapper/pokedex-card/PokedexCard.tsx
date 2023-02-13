import { FC, memo, useCallback } from 'react';
import s from './s_pokedexCard.module.scss';
import { Link } from 'react-router-dom';
import { pokemonListType } from '../../../../../utils/ts-types';

const PokedexCard: FC<PropType> = ({ pokedex }) => {
  const { name, url } = pokedex;
  const splitUrl = url.split('/');
  const id = splitUrl[splitUrl.length - 2];

  //get the first two names if the names are more than 2
  const nameSnippet = useCallback(() => {
    const splitName = name.split('-');
    if (splitName.length < 2) return name;
    return splitName.slice(0, splitName.length - 1).join('-');
  }, [name]);

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
        <h3>{nameSnippet()}</h3>
        <span>
          <strong>id </strong>
          {id}
        </span>
      </div>
    </Link>
  );
};

interface PropType {
  pokedex: pokemonListType;
}

export default memo(PokedexCard);
