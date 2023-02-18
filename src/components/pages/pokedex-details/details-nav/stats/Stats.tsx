import { FC, memo, Children } from 'react';
import { IStat } from '../../../../../utils/ts-types';
import CustomTable from '../../../../reusables/custom-table/CustomTable';
import s from './s_stats.module.scss';

const titles = ['name', 'base', 'effort'];
const Stats: FC<PropType> = ({ stats }) => {
  return (
    <div className={s.content}>
      <h3 className={s.content_title}>Stats</h3>
      <div className={s.item}>
        <CustomTable titles={titles}>
          <>
            {Children.toArray(
              stats.map((stat) => (
                <tr>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                  <td>{stat.effort}</td>
                </tr>
              ))
            )}
          </>
        </CustomTable>
      </div>
    </div>
  );
};

interface PropType {
  stats: IStat[];
}

export default memo(Stats);
