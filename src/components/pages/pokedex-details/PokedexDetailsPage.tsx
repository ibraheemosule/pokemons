import { FC, useState } from 'react';
import s from './s_pokedex-details.module.scss';
import DetailsNav from './sections/details-nav/DetailsNav';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import poke from './testingData';
import { useGetImages } from './hooks/useGetImages';
import spinner from '../../../assets/images/loader.gif';
import { IPokedex } from '../../../utils/ts-types';

const PokeDetailsPage: FC = () => {
  const { pokedexDetailsList } = useAppSelector(({ pokedex }) => pokedex);
  const name = useLocation().state as keyof typeof pokedexDetailsList;
  const [pokedex, setPokedex] = useState<IPokedex>(poke);

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
            <DetailsNav
              pokedex={poke}
              imageUrls={imageUrls}
              setImage={setImage}
            />
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
