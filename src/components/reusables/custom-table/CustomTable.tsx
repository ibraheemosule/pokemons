import { FC, memo, Children, ReactElement } from 'react';
import s from './s_custom-table.module.scss';

const CustomTable: FC<PropType> = ({ titles, children }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          {Children.toArray(
            titles.map((title) => (
              <th>
                <h4>{title}</h4>
              </th>
            ))
          )}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

interface PropType {
  titles: string[];
  children: ReactElement;
}

export default memo(CustomTable);
