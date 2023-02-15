import s from './s_topHeader.module.scss';
import { FC, ChangeEvent, useState } from 'react';
import SearchIcon from '../../../../assets/icons/SearchIcon';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setPokemonList } from '../../../../store/reducers/pokemonsReducer';
import { resetSearchByIdResult } from '../../../../store/reducers/pokedexReducer';
import { useIdSearchLogic } from './useIdSearchLogic';

const TopHeader: FC = () => {
  const dispatch = useAppDispatch();
  const { immutablePokemonsList } = useAppSelector((state) => state.pokemons);

  const [searchValue, setSearchValue] = useState('');

  useIdSearchLogic(searchValue);

  const updateSearchValue = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setSearchValue(value);

    if (Number(value)) {
      return;
    }

    dispatch(resetSearchByIdResult());

    const filteredList = immutablePokemonsList.filter((poke) =>
      poke.name.startsWith(value)
    );
    dispatch(setPokemonList(filteredList));
  };

  return (
    <section className={s.container}>
      <div className={s.top_header}>
        <h1>Pokédex</h1>
        <h4>
          Search for a Pokemon by name or using its National Pokedex number.
        </h4>
        <div className={s.top_header__search}>
          <div className={s.input_wrapper}>
            <span className={s.search_icon}>
              <SearchIcon />
            </span>
            <input
              type="text"
              maxLength={25}
              onChange={(e) => updateSearchValue(e)}
              placeholder="Name or number"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
