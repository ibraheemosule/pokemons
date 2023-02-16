import { FC, memo } from 'react';
import s from './s_moves.module.scss';
import { getRandomColor } from '../../../../../utils';

const Moves: FC<PropType> = ({ moves }) => {
  return (
    <ul className={s.wrapper}>
      {moves.map(({ move: { name } }) => (
        <li style={{ background: getRandomColor() }} key={name}>
          {name}
        </li>
      ))}
    </ul>
  );
};

interface PropType {
  moves: { move: { name: string } }[];
}

export default memo(Moves);
