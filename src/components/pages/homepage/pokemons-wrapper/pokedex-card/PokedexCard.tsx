import {
  FC,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import s from './s_pokedexCard.module.scss';
import { Link } from 'react-router-dom';
import { IPokedex, PokemonListType } from '../../../../../utils/ts-types';
import { pokedexColors } from '../../../../../utils/';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { addToPokedexDetailsList } from '../../../../../store/reducers/pokedexReducer';
import ErrorCard from '../../../../reusables/error-card/ErrorCard';
import Loader from '../../../../reusables/loader/Loader';
import useFetch from '../../../../reusables/hooks/useFetch';

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
  const [path, setPath] = useState('');
  const {
    data: poke,
    error,
    loading,
    setData: setPoke,
    setRetry,
  } = useFetch<IPokedex>(path);

  useLayoutEffect(() => {
    const pokedexInStore = pokedexList[name as keyof typeof pokedexList];
    if (!pokedexInStore) {
      setPath(`pokemon/${name}`);
      return;
    }
    setPoke(pokedexInStore);
  }, [pokedex]);

  useEffect(() => {
    if (poke) {
      setImgUrl(
        poke?.sprites?.other?.home?.front_default ||
          poke?.sprites?.other['official-artwork']?.front_default ||
          poke.sprites?.front_default
      );
      const pokeTypes = poke?.types.map(
        (type: { type: { name: string } }) => type.type.name
      );

      const primaryType = pokeTypes[0];
      setColor(pokedexColors[primaryType as keyof typeof pokedexColors]);
      dispatch(addToPokedexDetailsList({ [name]: poke }));
    }
  }, [JSON.stringify(poke)]);

  //get the first two names if the names are more than 2
  const nameSnippet = useCallback(() => {
    const splitName = name.split('-');
    if (splitName.length < 2) return name;
    return splitName.slice(0, splitName.length - 1).join('-');
  }, [name]);

  const cardJSX = (
    <>
      <img style={{ background: color }} src={imgUrl} alt="pokemon" />
      <div className={s.card_backdrop} />
      <div className={s.card_view}>
        {loading ? (
          <Loader width="50px" />
        ) : error && !imgUrl ? (
          <ErrorCard
            errMessage="Error while fetching details"
            size="sm"
            onBtnClick={() => {
              setRetry((num) => num + 1);
            }}
          />
        ) : (
          <p>
            View <span />
          </p>
        )}
      </div>
      <div className={s.card_content__wrapper}>
        <h3>{nameSnippet()}</h3>
        <span style={{ background: color }}>
          <strong>id </strong>
          {id}
        </span>
      </div>
    </>
  );

  return (
    <>
      {imgUrl && !loading ? (
        <Link to="pokedex" state={name} className={s.card}>
          {cardJSX}
        </Link>
      ) : (
        <span className={s.card}>{cardJSX}</span>
      )}
    </>
  );
};

interface PropType {
  pokedex: PokemonListType;
}

export default memo(PokedexCard);
