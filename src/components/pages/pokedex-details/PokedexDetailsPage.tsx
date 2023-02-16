import { FC, useState } from 'react';
import s from './s_pokedex-details.module.scss';
import DetailsNav from './sections/details-nav/DetailsNav';
import Forms from './sections/moves/Moves';
import Images from './sections/images/Images';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import poke from './testingData';
import { useGetImages } from './hooks/useGetImages';

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
            <p>n {pokedex.id}</p>
            <div className={s.name}>
              <h3>{poke.name}</h3>
              <div>
                <span>Free</span>
                <span>Fire</span>
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
              <Forms moves={poke.moves} />
            </div>
            <div className={s.description}>
              <h3>{poke.name}</h3>
              <p>
                Aijdfkl a jfl dksafjkladkflksafdklklsjdfkl ajsfkljlks
                akldfkljklsdgjlkajdklfjslkdjf lkajslkdgi asjfa kljalkj fladjld
                kglsjlkdsajlk cljlkgjladgl flksdj lkgjdlkadklfgjlk bjafdlk
                lkgjlkdagfkl gljliadfgjlkafdjglj iajdfglkjlgfkadgjc
                lzjlkcfdglkjlkafj
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PokeDetailsPage;
