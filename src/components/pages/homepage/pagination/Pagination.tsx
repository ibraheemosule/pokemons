import s from './s_pagination.module.scss';
import {
  FC,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  useState,
  useEffect,
} from 'react';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { paginateFunction } from '../../../../utils';
import { setPaginatedList } from '../../../../store/reducers/pokemonsReducer';

export interface IPaginationProps {
  number: number;
  numOfPages: number;
  setNumber: Dispatch<SetStateAction<number>>;
}

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.pokemons.pokemonsList);
  const [number, setNumber] = useState(1);
  const [pageNumberInput, setPageNumberInput] = useState<number>(number);
  const numOfPages = Math.ceil(list.length / 8);

  useEffect(() => setPageNumberInput(number), [number]);

  useEffect(() => {
    const paginatedArray = paginateFunction({
      arr: [...list],
      pageSize: 8,
      pageNumber: number,
    });

    dispatch(setPaginatedList([...paginatedArray]));
  }, [JSON.stringify(list), number]);

  const increment = () => {
    if (number < numOfPages) setNumber((number) => number + 1);
  };

  const decrement = () => {
    if (number > 1) setNumber((number) => number - 1);
  };

  const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const inputFieldValue = e.target.value.trim();
    const newPaginationNumber = Number(inputFieldValue);

    if (Number.isNaN(newPaginationNumber) || newPaginationNumber > numOfPages)
      return;

    if (newPaginationNumber === 0) {
      setPageNumberInput(inputFieldValue === '' ? +inputFieldValue : 0);
      return;
    }
    setNumber(newPaginationNumber);
    setPageNumberInput(newPaginationNumber);
  };

  return (
    <section className={s.pagination}>
      {numOfPages > 0 && (
        <>
          <button disabled={number > 1 ? false : true} onClick={decrement}>
            Previous
          </button>
          <div>
            <input
              type="text"
              value={pageNumberInput}
              pattern="[0-9]+"
              inputMode="numeric"
              onChange={(e) => changeNumber(e)}
            />
            of {numOfPages}
          </div>
          <button
            disabled={number < numOfPages ? false : true}
            onClick={increment}
          >
            Next
          </button>
        </>
      )}
    </section>
  );
};

export default Pagination;
