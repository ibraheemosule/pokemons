import { FC } from 'react';
import Navbar from './navbar/Navbar';
import Home from '../../pages/home/Home';
import s from './s_layout.module.scss';

const Layout: FC = () => {
  return (
    <main>
      <Navbar />
      <Home />
    </main>
  );
};

export default Layout;
