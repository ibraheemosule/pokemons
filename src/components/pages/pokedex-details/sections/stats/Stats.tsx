import { FC, memo, Children } from 'react';
import s from './s_stats.module.scss';

const Stats: FC<PropType> = ({ stats }) => {
  return (
    <div className={s.stats}>
      <div className={s.item}>
        <table>
          <thead>
            <tr>
              <th>
                <h4>Stat Name</h4>
              </th>
              <th>
                <h4>Base Stat</h4>
              </th>
              <th>
                <h4>effort</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {Children.toArray(
              stats.map((stat) => (
                <tr>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                  <td>{stat.effort}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface PropType {
  stats: { base_stat: number; effort: number; stat: { name: string } }[];
}

export default memo(Stats);
