import s from './s_topHeader.module.scss';
import { FC } from 'react';
import SearchIcon from '../../../../assets/icons/SearchIcon';

const TopHeader: FC = () => {
  return (
    <section className={s.container}>
      <div className={s.top_header}>
        <h1>Pokédex</h1>
        <h4>
          Search for a Pokemon by name or using its National Pokedex number.
        </h4>
        <div className={s.topheader__search}>
          <div className={s.input_wrapper}>
            <span className={s.search_icon}>
              <SearchIcon />
            </span>
            <input type="text" placeholder="Name or number" />
          </div>
          <div className={s.filter_wrapper}>filter by</div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
