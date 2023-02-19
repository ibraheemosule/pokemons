import { FC, ReactElement } from 'react';
import s from './s_moreInfo.module.scss';
import { IPokedex } from '../../../../utils/ts-types';

const infos = ['base_experience', 'height', 'weight', 'order'];

const MoreInfo: FC<PropType> = ({ pokedex }) => {
  return (
    <div className={s.more_info}>
      <h3>Additional Information</h3>
      <ul className={s.more_info__body}>
        {infos.map((info) =>
          pokedex[info as keyof typeof pokedex] ? (
            <li key={info}>
              <strong>
                {
                  {
                    base_experience: 'Base Experience',
                    height: 'Height (Dm)',
                    weight: 'Weight (Hg)',
                    order: 'Order',
                  }[info]
                }
              </strong>
              <span>
                {
                  pokedex[
                    info as keyof typeof pokedex
                  ] as unknown as ReactElement
                }
              </span>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

interface PropType {
  pokedex: IPokedex;
}

export default MoreInfo;
