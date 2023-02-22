import { Children, FC, memo, useEffect, useState } from 'react';
import s from './s_evolutions.module.scss';
import arrow from '../../../../../assets/images/arrow-right.png';

import Loader from '../../../../reusables/loader/Loader';
import ErrorCard from '../../../../reusables/error-card/ErrorCard';
import useFetch from '../../../../reusables/hooks/useFetch';

import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { addToPokedexDetailsList } from '../../../../../store/reducers/pokedexReducer';
import { IPokemonEvolution } from '../../../../../utils/ts-types';
import { getRandomColor } from '../../../../../utils';

const errMessage = 'could not fetch evolutions data';

const Evolutions: FC<PropType> = ({ name }) => {
  const dispatch = useAppDispatch();
  const { pokedexDetailsList } = useAppSelector((state) => state.pokedex);

  const [url, setUrl] = useState('');
  const [evolutions, setEvolutions] = useState<string[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error, loading, setRetry } = useFetch<any>(url);

  useEffect(() => {
    if (!pokedexDetailsList[name]?.evolutions && !data) {
      setUrl(`pokemon-species/${name}`);
      return;
    }
    if (data?.evolution_chain) {
      const evolutionUrl = data?.evolution_chain.url.split('v2/')[1];
      setUrl(evolutionUrl);
      return;
    }
    if (data?.chain) {
      const evolutionNames = getEvolutionNames(data.chain);
      const updateDetails = {
        evolutions: evolutionNames,
        ...pokedexDetailsList[name],
      };
      setEvolutions(evolutionNames);
      dispatch(addToPokedexDetailsList({ [name]: updateDetails }));
    } else setEvolutions(pokedexDetailsList[name].evolutions!);
  }, [data]);

  function getEvolutionNames(chain: IPokemonEvolution) {
    const evolvesToNames: string[] = [];
    chain.evolves_to.forEach((evolution) => {
      evolvesToNames.push(evolution.species.name);
      if (evolution.evolves_to.length > 0) {
        getEvolutionNames(evolution);
      }
    });

    return evolvesToNames;
  }

  function retryFetch() {
    setRetry((number) => number + 1);
  }

  return (
    <div data-cy="evolutions" className={s.content}>
      <h3 className={s.content_title}>Evolution Progress</h3>
      <div className={s.evolutions}>
        {!loading && !evolutions.length && !error && <h4>No evolution</h4>}
        {evolutions.length ? (
          evolutions.map((val, index) =>
            Children.toArray(
              <>
                {index !== 0 && <img src={arrow} alt="evolve to" />}
                <span style={{ background: getRandomColor() }} key={val}>
                  {val}
                </span>
              </>
            )
          )
        ) : loading ? (
          <Loader width="70px" />
        ) : (
          !!error && (
            <div className={s.error_wrapper}>
              <ErrorCard
                size="sm"
                errMessage={errMessage}
                onBtnClick={retryFetch}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
interface PropType {
  name: string;
}
export default memo(Evolutions);
