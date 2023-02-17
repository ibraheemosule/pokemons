import { FC, lazy, useState, Suspense } from 'react';
import s from './s_pokedex-details.module.scss';
import DetailsNav, { detailsNavList } from './sections/details-nav/DetailsNav';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import poke from './testingData';
import { useGetImages } from './hooks/useGetImages';
import spinner from '../../../assets/images/loader.gif';

const Forms = lazy(() => import('./sections/moves/Moves'));
const Images = lazy(() => import('./sections/images/Images'));
const Stats = lazy(() => import('./sections/stats/Stats'));
const HeldItems = lazy(() => import('./sections/held-items/HeldItems'));
const Abilities = lazy(() => import('./sections/abilities/Abilities'));

const PokeDetailsPage: FC = () => {
  const { pokedexDetailsList } = useAppSelector(({ pokedex }) => pokedex);
  const name = useLocation().state as keyof typeof pokedexDetailsList;
  const [pokedex, setPokedex] = useState<any>(poke);

  const { image, setImage, imageUrls } = useGetImages(poke.sprites);

  return (
    <main>
      <section className={s.container}>
        <div className={s.wrapper}>
          <div className={s.pokedex_heading}>
            <div className={s.name}>
              <h3>{poke.name}</h3>
              <div>
                <span>
                  <strong>ID:</strong> {pokedex.id}
                </span>
              </div>
            </div>
            <div className={s.img_wrapper}>
              <img src={image} alt="pokemon" />
            </div>
          </div>
          <div className={s.pokedex_info}>
            <DetailsNav />
            <div className={s.nav_content}>
              {/* <Images imageUrls={imageUrls} setImage={setImage} /> */}
              {/* <Forms moves={poke.moves} /> */}
              {/* <HeldItems items={poke.held_items} /> */}
              {/* <Stats stats={poke.stats} /> */}
              <Suspense fallback={<img src={spinner} alt="loader" />}>
                <Abilities abilities={poke.abilities} />
              </Suspense>
            </div>
            <div className={s.description}>
              <h3>Additional Information</h3>
              <ul className={s.description_body}>
                {poke.base_experience && (
                  <li>
                    <strong>Base Experience</strong>
                    <span>{poke.base_experience}</span>
                  </li>
                )}
                {poke.height && (
                  <li>
                    <strong>Height</strong>
                    <span>{poke.weight}</span>
                  </li>
                )}
                {poke.weight && (
                  <li>
                    <strong>Weight</strong>
                    <span>{poke.weight}</span>
                  </li>
                )}
                {poke.order && (
                  <li>
                    <strong>Order</strong>
                    <span>{poke.order}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PokeDetailsPage;
