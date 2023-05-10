import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { useGetImages } from './hooks/useGetImages';
import s from './s_pokedex-details.module.scss';
import DetailsNav from './details-nav/DetailsNav';
import Heading from './Heading/Heading';
import MoreInfo from './more-info/MoreInfo';
import { getPokedex } from '../../../store/reducers/apiCalls';

const PokeDetailsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { pokedexDetailsList } = useAppSelector(({ pokedex }) => pokedex);
  const name = useLocation().state as keyof typeof pokedexDetailsList;
  const pokedex = pokedexDetailsList[name];
  const { image, setImage, imageUrls } = useGetImages(pokedex?.sprites);

  console.log(name);

  if (!pokedex) {
    void (async () => {
      const data = await dispatch(getPokedex(`pokemon/${name}`));
      console.log(data);
    })();
    return <div>llkdjfkladsf</div>;
    return <Navigate to="/" replace={true} />;
  }

  return (
    <main>
      <section className={s.container}>
        <div className={s.wrapper}>
          <Heading id={pokedex.id} image={image} name={pokedex.name} />
          <div className={s.pokedex_info}>
            <DetailsNav
              image={image}
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
