import { FC } from 'react';
import s from './s_pokedex-details.module.scss';
import DetailsNav from './details-nav/DetailsNav';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import { useGetImages } from './hooks/useGetImages';
import MoreInfo from './more-info/MoreInfo';
import Heading from './Heading/Heading';

const PokeDetailsPage: FC = () => {
  const { pokedexDetailsList } = useAppSelector(({ pokedex }) => pokedex);
  const name = useLocation().state as keyof typeof pokedexDetailsList;
  const pokedex = pokedexDetailsList[name];
  const { image, setImage, imageUrls } = useGetImages(pokedex?.sprites);

  if (!pokedex) {
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
