import { FC, memo, Children } from 'react';
import { IHeldItem } from '../../../../../utils/ts-types';
import CustomTable from '../../../../reusables/custom-table/CustomTable';
import s from './s_heldItems.module.scss';

const titles = ['item version', 'item rarity'];

const HeldItems: FC<PropType> = ({ items }) => {
  return (
    <div className={s.content_wrapper}>
      {items.length ? (
        Children.toArray(
          items.map(({ item, version_details }) => (
            <div className={s.item}>
              <h4>{item.name}</h4>
              <CustomTable titles={titles}>
                <>
                  {Children.toArray(
                    version_details.map(({ rarity, version }) => (
                      <tr>
                        <td>{version.name}</td>
                        <td>{rarity}</td>
                      </tr>
                    ))
                  )}
                </>
              </CustomTable>
            </div>
          ))
        )
      ) : (
        <h4 className={s.no_item}>No Held Items</h4>
      )}
    </div>
  );
};

interface PropType {
  items: IHeldItem[];
}

export default memo(HeldItems);
