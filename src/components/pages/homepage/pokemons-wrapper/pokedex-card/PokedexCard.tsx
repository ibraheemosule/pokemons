import { FC, memo, useCallback, useEffect, useState } from 'react';
import s from './s_pokedexCard.module.scss';
import { Link } from 'react-router-dom';
import { PokemonListType } from '../../../../../utils/ts-types';
import { fetchData, pokedexColors } from '../../../../../utils/';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { addToPokedexDetailsList } from '../../../../../store/reducers/pokedexReducer';
import ErrorCard from '../../../../reusables/error-card/ErrorCard';
import Loader from '../../../../reusables/loader/Loader';

const PokedexCard: FC<PropType> = ({ pokedex }) => {
  const pokedexList = useAppSelector(
    (state) => state.pokedex.pokedexDetailsList
  );
  const [imgUrl, setImgUrl] = useState('');
  const [color, setColor] = useState('#68A090');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, url } = pokedex;
  const dispatch = useAppDispatch();
  const splitUrl = url.split('/');
  const id = splitUrl[splitUrl.length - 2];
  const controller = new AbortController();

  useEffect(() => {
    fetchPokeDetails();

    return () => controller.abort();
  }, [pokedex]);

  const fetchPokeDetails = async () => {
    let poke;
    const pokedexInStore = pokedexList[name as keyof typeof pokedexList];

    setError(false);
    setLoading(true);

    if (!pokedexInStore) {
      try {
        poke = await fetchData(controller.signal)(name);
      } catch (e) {
        setError(true);
        setLoading(false);
        return;
      }
    } else poke = pokedexInStore;

    setImgUrl(
      poke.sprites?.other?.home?.front_default ||
        poke.sprites?.other['official-artwork']?.front_default ||
        poke.sprites.front_default
    );

    const pokeTypes = poke.types.map(
      (type: { type: { name: string } }) => type.type.name
    );

    setError(() => false);
    setLoading(() => false);

    const primaryType = pokeTypes[0];
    setColor(pokedexColors[primaryType as keyof typeof pokedexColors]);

    dispatch(addToPokedexDetailsList({ [name]: poke }));
  };

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
          <Loader width="150px" />
        ) : error && !imgUrl ? (
          <ErrorCard
            errMessage="Error while fetching details"
            size="sm"
            onBtnClick={() => fetchPokeDetails()}
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
        <div className={s.card}>{cardJSX}</div>
      )}
    </>
  );
};

interface PropType {
  pokedex: PokemonListType;
}

export default memo(PokedexCard);
