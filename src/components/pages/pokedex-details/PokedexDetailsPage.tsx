import { FC } from 'react';
import s from './s_pokedex-details.module.scss';
import pokemonImage from '../../../assets/images/pokemon.jpg';
import Form from './form/Form';

const PokeDetailsPage: FC = () => {
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
              <img src={pokemonImage} alt="pokemon" />
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
              <Form />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PokeDetailsPage;
