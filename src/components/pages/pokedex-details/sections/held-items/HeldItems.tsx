import { FC, memo, Children } from 'react';
import s from './s_heldItems.module.scss';

const HeldItems: FC<PropType> = ({ items }) => {
  return (
    <div className={s.held_items_wrapper}>
      {items.length ? (
        Children.toArray(
          items.map(({ item, version_details }) => (
            <div className={s.item}>
              <h4>{item.name}</h4>

              <table>
                <thead>
                  <tr>
                    <th>
                      <h4>Item Version</h4>
                    </th>
                    <th>
                      <h4>Item Rarity</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Children.toArray(
                    version_details.map(({ rarity, version }) => (
                      <tr>
                        <td>{version.name}</td>
                        <td>{rarity}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
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
  items: {
    item: { name: string };
    version_details: { rarity: number; version: { name: string } }[];
  }[];
}

export default memo(HeldItems);
