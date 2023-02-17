import { useState, Dispatch, FC, SetStateAction, lazy, Suspense } from 'react';
import s from './s_detailsNav.module.scss';
import spinner from '../../../../../assets/images/loader.gif';
import { IPokedex } from '../../../../../utils/ts-types';

const Moves = lazy(() => import('../moves/Moves'));
const Images = lazy(() => import('../images/Images'));
const Stats = lazy(() => import('../stats/Stats'));
const HeldItems = lazy(() => import('../held-items/HeldItems'));
const Abilities = lazy(() => import('../abilities/Abilities'));

export const detailsNavList = [
  'images',
  'moves',
  'evolutions',
  'held items',
  'stats',
  'abilities',
  'indices',
];

const DetailsNav: FC<PropType> = ({ pokedex }) => {
  const [content, setContent] = useState('images');
  return (
    <>
      <nav className={s.nav}>
        <ul>
          {detailsNavList.map((option) => (
            <li key={option}>
              <button>{option}</button>
            </li>
          ))}
        </ul>
      </nav>
      <div className={s.nav_content}>
        {/* <Images imageUrls={imageUrls} setImage={setImage} /> */}
        {/* <Forms moves={poke.moves} /> */}
        {/* <HeldItems items={poke.held_items} /> */}
        {/* <Stats stats={poke.stats} /> */}
        <Suspense fallback={<img src={spinner} alt="loader" />}>
          <Abilities abilities={pokedex.abilities} />
        </Suspense>
      </div>
    </>
  );
};

interface PropType {
  pokedex: IPokedex;
}

export default DetailsNav;
