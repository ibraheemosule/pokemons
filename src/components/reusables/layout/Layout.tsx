import { FC } from 'react';
import Navbar from './navbar/Navbar';
//import Homepage from '../../pages/homepage/Home';
import PokeDetailsPage from '../../pages/pokedex-details/PokedexDetailsPage';
import s from './s_layout.module.scss';

const Layout: FC = () => {
  return (
    <main className={s.layout}>
      <Navbar />
      <PokeDetailsPage />
    </main>
  );
};

export default Layout;
