import { FC, memo } from 'react';
import s from './s_loader.module.scss';
import loader from '../../../assets/images/loader.gif';

const Loader: FC<PropType> = ({ width }) => (
  <div style={{ width }} className={s.loader}>
    <img src={loader} alt="loading spinner" />
  </div>
);

interface PropType {
  width?: string;
}

export default memo(Loader);
