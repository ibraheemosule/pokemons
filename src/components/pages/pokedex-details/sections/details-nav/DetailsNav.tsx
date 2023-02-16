import { FC } from 'react';
import s from './s_detailsNav.module.scss';
import { Link } from 'react-router-dom';

const DetailsNav: FC = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <Link to="/pokedex">images</Link>
        </li>
        <li>
          <Link to="/pokedex">meny</Link>
        </li>
        <li>
          <Link to="/pokedex">meny</Link>
        </li>
        <li>
          <Link to="/pokedex">meny</Link>
        </li>
        <li>
          <Link to="/pokedex">meny</Link>
        </li>
        <li>
          <Link to="/pokedex">meny</Link>
        </li>
        <li>
          <Link to="/pokedex">meny</Link>
        </li>
        <li>
          <Link to="/pokedex">meny</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DetailsNav;
