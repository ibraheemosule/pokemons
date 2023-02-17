import { FC } from 'react';
import s from './s_moreInfo.module.scss';
import { IPokedex } from '../../../../utils/ts-types';

const MoreInfo: FC<PropType> = ({ pokedex }) => {
  return (
    <div className={s.more_info}>
      <h3>Additional Information</h3>
      <ul className={s.more_info__body}>
        {pokedex.base_experience && (
          <li>
            <strong>Base Experience</strong>
            <span>{pokedex.base_experience}</span>
          </li>
        )}
        {pokedex.height && (
          <li>
            <strong>Height</strong>
            <span>{pokedex.weight}</span>
          </li>
        )}
        {pokedex.weight && (
          <li>
            <strong>Weight</strong>
            <span>{pokedex.weight}</span>
          </li>
        )}
        {pokedex.order && (
          <li>
            <strong>Order</strong>
            <span>{pokedex.order}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

interface PropType {
  pokedex: IPokedex;
}

export default MoreInfo;
