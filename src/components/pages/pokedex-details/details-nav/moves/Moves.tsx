import { Children, FC, memo } from 'react';
import s from './s_moves.module.scss';
import { getRandomColor } from '../../../../../utils';

const Moves: FC<PropType> = ({ moves }) => {
  return (
    <div data-cy="moves" className={s.content}>
      <h3 className={s.content_title}>Moves</h3>
      <ul className={s.wrapper}>
        {Children.toArray(
          moves.map(({ move: { name } }) => (
            <li style={{ background: getRandomColor() }}>{name}</li>
          ))
        )}
      </ul>
    </div>
  );
};

interface PropType {
  moves: { move: { name: string } }[];
}

export default memo(Moves);
