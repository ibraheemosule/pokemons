import { FC, useState } from 'react';
import s from './s_pokedex-details.module.scss';
import pokemonImage from '../../../assets/images/pokemon.jpg';
import Form from './pokedex/Form';

const PokeDetailsPage: FC = () => {
  const [image, setImage] = useState(pokemonImage);

  return (
    <main>
      <section className={s.container}>
        <div className={s.wrapper}>
          <div className={s.pokedex_heading}>
            <p>n 006</p>
            <div className={s.name}>
              <h3>Charizard</h3>
              <div>
                <span>Free</span>
                <span>Fire</span>
              </div>
            </div>
            <div className={s.img_wrapper}>
              <img
                src={
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png'
                }
                alt="pokemon"
              />
            </div>
          </div>
          <div className={s.pokedex_info}>
            <nav>
              <ul>
                <li>meny</li>
                <li>meny</li>
                <li>meny</li>
                <li>meny</li>
                <li>meny</li>
              </ul>
            </nav>
            <div className={s.nav_content}>
              <Form setImage={setImage} />
            </div>
            <div className={s.description}>
              <h3>Mega Charizard X</h3>
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
