import { FC, memo, Children } from 'react';
import { IAbility } from '../../../../../utils/ts-types';
import CustomTable from '../../../../reusables/custom-table/CustomTable';
import s from './s_abilities.module.scss';

const titles = ['ability name', 'slot', 'hidden'];

const Abilities: FC<PropType> = ({ abilities }) => {
  return (
    <div className={s.content_wrapper}>
      <div className={s.item}>
        <CustomTable titles={titles}>
          <>
            {Children.toArray(
              abilities.map((ability) => (
                <tr>
                  <td>{ability.ability.name}</td>
                  <td>{ability.slot}</td>
                  <td>{ability.is_hidden ? 'Yes' : 'No'}</td>
                </tr>
              ))
            )}
          </>
        </CustomTable>
        <table>
          {/* <thead>
            <tr>
              <th>
                <h4>Ability Name</h4>
              </th>
              <th>
                <h4>Slot</h4>
              </th>
              <th>
                <h4>Hidden</h4>
              </th>
            </tr>
          </thead> */}
          {/* <tbody>
            {Children.toArray(
              abilities.map((ability) => (
                <tr>
                  <td>{ability.ability.name}</td>
                  <td>{ability.slot}</td>
                  <td>{ability.is_hidden ? 'Yes' : 'No'}</td>
                </tr>
              ))
            )}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

interface PropType {
  abilities: IAbility[];
}

export default memo(Abilities);
