import { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './s_navbar.module.scss';
import logo from '../../../../assets/images/logo.png';

const Navbar: FC = () => {
  return (
    <nav className={s.navbar} translate="no">
      <Link to="/">
        <img src={logo} alt="website logo" />
      </Link>
      <Link data-cy="home-link" to="/">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
