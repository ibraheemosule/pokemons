import { Children, FC, memo } from 'react';
import s from './s_moves.module.scss';
import { getRandomColor } from '../../../../../utils';

const Moves: FC<PropType> = ({ moves }) => {
  return (
    <ul className={s.wrapper}>
      {Children.toArray(
        moves.map(({ move: { name } }) => (
          <li style={{ background: getRandomColor() }}>{name}</li>
        ))
      )}
    </ul>
  );
};

interface PropType {
  moves: { move: { name: string } }[];
}

export default memo(Moves);
