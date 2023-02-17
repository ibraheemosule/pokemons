import { FC, memo, Children } from 'react';
import { IGameIndices } from '../../../../../utils/ts-types';
import CustomTable from '../../../../reusables/custom-table/CustomTable';
import s from './s_indices.module.scss';

const titles = ['version name', 'index'];

const Indices: FC<PropType> = ({ indices }) => {
  return (
    <div className={s.content_wrapper}>
      <div className={s.item}>
        <CustomTable titles={titles}>
          <>
            {Children.toArray(
              indices.map((index) => (
                <tr>
                  <td>{index.version.name}</td>
                  <td>{index.game_index}</td>
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
  indices: IGameIndices[];
}

export default memo(Indices);
