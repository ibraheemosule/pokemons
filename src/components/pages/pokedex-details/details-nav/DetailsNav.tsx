import {
  useState,
  Dispatch,
  FC,
  SetStateAction,
  lazy,
  Suspense,
  useCallback,
} from 'react';
import s from './s_detailsNav.module.scss';
import { IPokedex } from '../../../../utils/ts-types';
import Loader from '../../../reusables/loader/Loader';

const Moves = lazy(() => import('./moves/Moves'));
const Images = lazy(() => import('./images/Images'));
const Stats = lazy(() => import('./stats/Stats'));
const HeldItems = lazy(() => import('./held-items/HeldItems'));
const Abilities = lazy(() => import('./abilities/Abilities'));
const Evolutions = lazy(() => import('./evolutions/Evolutions'));
const Indices = lazy(() => import('./indices/Indices'));

const detailsNavList = [
  'images',
  'moves',
  'evolutions',
  'held items',
  'stats',
  'abilities',
  'indices',
];

const DetailsNav: FC<PropType> = ({ pokedex, imageUrls, setImage }) => {
  const [content, setContent] = useState('images');

  const active = useCallback(
    (nav: string) => ({
      borderColor: nav === content ? 'blue' : '',
    }),
    [content]
  );

  return (
    <>
      <nav className={s.nav}>
        <ul>
          {detailsNavList.map((option) => (
            <li style={active(option)} key={option}>
              <button onClick={() => setContent(option)}>{option}</button>
            </li>
          ))}
        </ul>
      </nav>
      <div className={s.nav_content}>
        <Suspense fallback={<Loader width="50px" />}>
          {
            {
              images: <Images imageUrls={imageUrls} setImage={setImage} />,
              moves: <Moves moves={pokedex.moves} />,
              evolutions: <Evolutions name={pokedex.name} />,
              'held items': <HeldItems items={pokedex.held_items} />,
              stats: <Stats stats={pokedex.stats} />,
              abilities: <Abilities abilities={pokedex.abilities} />,
              indices: <Indices indices={pokedex.game_indices} />,
            }[content]
          }
        </Suspense>
      </div>
    </>
  );
};

interface PropType {
  pokedex: IPokedex;
  imageUrls: string[];
  setImage: Dispatch<SetStateAction<string>>;
}

export default DetailsNav;
