import { FC } from 'react';
import s from './s_detailsNav.module.scss';
import { Link } from 'react-router-dom';

export const detailsNavList = [
  'images',
  'moves',
  'evolutions',
  'held items',
  'stats',
  'abilities',
  'indices',
];

const DetailsNav: FC = () => {
  return (
    <nav className={s.nav}>
      <ul>
        {detailsNavList.map((option) => (
          <li key={option}>
            <Link to="/pokedex">{option}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DetailsNav;
