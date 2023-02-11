import { FC } from 'react';
import Home from '../../pages/home/Home';
import './s_layout.scss';

const Layout: FC = () => {
  return (
    <main className="container">
      <Home />
    </main>
  );
};

export default Layout;
