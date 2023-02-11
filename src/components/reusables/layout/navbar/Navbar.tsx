import { FC } from 'react';

import s from './s_navbar.module.scss';

const Navbar: FC = () => {
  return (
    <nav className={s.navbar} translate="no">
      <div>Pokemon logo</div>
    </nav>
  );
};

export default Navbar;
