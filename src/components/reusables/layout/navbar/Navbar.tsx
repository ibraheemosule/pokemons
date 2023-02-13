import { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './s_navbar.module.scss';

const Navbar: FC = () => {
  return (
    <nav className={s.navbar} translate="no">
      <div>Pokemon logo</div>
      <Link to="/">Home</Link>
    </nav>
  );
};

export default Navbar;
