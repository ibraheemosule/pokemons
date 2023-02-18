import { Children, FC, memo, useEffect, useState } from 'react';
import { fetchData } from '../../../../../utils';
import { IPokemonEvolution } from '../../../../../utils/ts-types';
import s from './s_evolutions.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { addToPokedexDetailsList } from '../../../../../store/reducers/pokedexReducer';
import { getRandomColor } from '../../../../../utils';
import arrow from '../../../../../assets/images/arrow-right.png';
import Loader from '../../../../reusables/loader/Loader';

const Evolutions: FC<PropType> = ({ name }) => {
  const dispatch = useAppDispatch();
  const { pokedexDetailsList } = useAppSelector((state) => state.pokedex);
  const [evolutions, setEvolutions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pokedexDetailsList[name]?.evolutions) {
      (async () => {
        setLoading(true);
        const data = await fetchData()(`pokemon-species/${name}`);
        const evolutionUrl = data.evolution_chain.url.split('v2/')[1];
        const { chain } = await fetchData()(evolutionUrl);
        const evolutionNames = getEvolutionNames(chain);

        const updateDetails = {
          evolutions: evolutionNames,
          ...pokedexDetailsList[name],
        };
        setEvolutions(evolutionNames);

        console.log(evolutionNames);

        dispatch(addToPokedexDetailsList({ [name]: updateDetails }));
        setLoading(false);
      })();
    } else setEvolutions(pokedexDetailsList[name].evolutions!);
  }, []);

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
  return (
    <div className={s.content}>
      <h3 className={s.content_title}>Evolution Progress</h3>
      <div className={s.evolutions}>
        {!loading && !evolutions.length && <h4>No evolution</h4>}
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
          <Loader width="130px" />
        ) : null}
      </div>
    </div>
  );
};
interface PropType {
  name: string;
}
export default memo(Evolutions);
