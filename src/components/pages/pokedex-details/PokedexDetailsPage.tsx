import { FC, useEffect, useState } from 'react';
import s from './s_pokedex-details.module.scss';
import DetailsNav from './details-nav/DetailsNav';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import poke from './testingData';
import { useGetImages } from './hooks/useGetImages';
import spinner from '../../../assets/images/loader.gif';
import { IPokedex } from '../../../utils/ts-types';
import MoreInfo from './more-info/MoreInfo';
import Heading from './Heading/Heading';

const PokeDetailsPage: FC = () => {
  const { pokedexDetailsList } = useAppSelector(({ pokedex }) => pokedex);
  const name = useLocation().state as keyof typeof pokedexDetailsList;
  const [pokedex, setPokedex] = useState<IPokedex>(
    // pokedexDetailsList[name] ||
    poke
  );

  const { image, setImage, imageUrls } = useGetImages(pokedex.sprites);

  if (!pokedexDetailsList[name]) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <main>
      <section className={s.container}>
        <div className={s.wrapper}>
          <Heading id={pokedex.id} image={image} name={pokedex.name} />
          <div className={s.pokedex_info}>
            <DetailsNav
              pokedex={pokedex}
              imageUrls={imageUrls}
              setImage={setImage}
            />
            <MoreInfo pokedex={pokedex} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PokeDetailsPage;
