import { FC } from 'react';
import TopHeader from './top-header/Topheader';
import PokemonsWrapper from './pokemons-wrapper/PokemonsWrapper';
import Pagination from './pagination/Pagination';

const Home: FC = () => {
  return (
    <div>
      <TopHeader />
      <PokemonsWrapper />
      <Pagination />
    </div>
  );
};

export default Home;
