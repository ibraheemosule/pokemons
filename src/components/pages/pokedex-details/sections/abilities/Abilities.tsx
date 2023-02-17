import { FC, memo, Children } from 'react';
import { IAbility } from '../../../../../utils/ts-types';
import s from './s_abilities.module.scss';

const Abilities: FC<PropType> = ({ abilities }) => {
  return (
    <div className={s.abilities}>
      <div className={s.item}>
        <table>
          <thead>
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
          </thead>
          <tbody>
            {Children.toArray(
              abilities.map((ability) => (
                <tr>
                  <td>{ability.ability.name}</td>
                  <td>{ability.slot}</td>
                  <td>{ability.is_hidden ? 'Yes' : 'No'}</td>
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
  abilities: IAbility[];
}

export default memo(Abilities);
