import { FC } from 'react';
import TopHeader from './top-header/Topheader';
import PokemonsWrapper from './pokemons-wrapper/PokemonsWrapper';

const Home: FC = () => {
  return (
    <div>
      <TopHeader />
      <PokemonsWrapper />
    </div>
  );
};

export default Home;
