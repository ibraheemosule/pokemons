import { FC, memo, Children } from 'react';
import { IGameIndices } from '../../../../../utils/ts-types';
import s from './s_indices.module.scss';

const Indices: FC<PropType> = ({ indices }) => {
  return (
    <div className={s.indices}>
      <div className={s.item}>
        <table>
          <thead>
            <tr>
              <th>
                <h4>Version Name</h4>
              </th>
              <th>
                <h4>Index</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {Children.toArray(
              indices.map((index) => (
                <tr>
                  <td>{index.version.name}</td>
                  <td>{index.game_index}</td>
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
  indices: IGameIndices[];
}

export default memo(Indices);
