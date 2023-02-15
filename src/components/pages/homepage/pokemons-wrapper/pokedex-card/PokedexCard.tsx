import { FC, memo, useCallback, useEffect, useState } from 'react';
import s from './s_pokedexCard.module.scss';
import { Link } from 'react-router-dom';
import { PokemonListType } from '../../../../../utils/ts-types';
import { fetchData, pokedexColors } from '../../../../../utils/';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { addToPokedexDetailsList } from '../../../../../store/reducers/pokedexReducer';

const PokedexCard: FC<PropType> = ({ pokedex }) => {
  const pokedexList = useAppSelector(
    (state) => state.pokedex.pokedexDetailsList
  );
  const [imgUrl, setImgUrl] = useState('');
  const [color, setColor] = useState('#68A090');
  const { name, url } = pokedex;
  const dispatch = useAppDispatch();
  const splitUrl = url.split('/');
  const id = splitUrl[splitUrl.length - 2];
  const controller = new AbortController();

  useEffect(() => {
    const pokedexInStore = pokedexList[name as keyof typeof pokedexList];

    (async () => {
      let pokedexInfo;

      if (!pokedexInStore) {
        pokedexInfo = await fetchData(controller.signal)(name);
      } else pokedexInfo = pokedexInStore;

      setImgUrl(
        pokedexInfo.sprites.front_shiny || pokedexInfo.sprites.front_default
      );

      const pokeTypes = pokedexInfo.types.map(
        (type: { type: { name: string } }) => type.type.name
      );

      const primaryType = pokeTypes[0];
      setColor(pokedexColors[primaryType as keyof typeof pokedexColors]);

      dispatch(addToPokedexDetailsList({ [name]: pokedexInfo }));
    })();

    return () => controller.abort();
  }, [pokedex]);

  //get the first two names if the names are more than 2
  const nameSnippet = useCallback(() => {
    const splitName = name.split('-');
    if (splitName.length < 2) return name;
    return splitName.slice(0, splitName.length - 1).join('-');
  }, [name]);

  return (
    <Link to="/pokedex" className={s.card}>
      <img style={{ background: color }} src={imgUrl} alt="pokemon" />
      <div className={s.card_backdrop} />
      <div className={s.card_view}>
        <p>
          View <span />
        </p>
      </div>
      <div className={s.card_content__wrapper}>
        <h3>{nameSnippet()}</h3>
        <span style={{ background: color }}>
          <strong>id </strong>
          {id}
        </span>
      </div>
    </Link>
  );
};

interface PropType {
  pokedex: PokemonListType;
}

export default memo(PokedexCard);
