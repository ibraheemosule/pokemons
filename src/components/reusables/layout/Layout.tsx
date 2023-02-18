import { FC, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import HomePage from '../../pages/homepage/Home';
import PokeDetailsPage from '../../pages/pokedex-details/PokedexDetailsPage';
import s from './s_layout.module.scss';
import { Route, Routes } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <main className={s.layout}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokeDetailsPage />} />
      </Routes>
    </main>
  );
};

export default Layout;
