import { FC, memo } from 'react';
import s from './s_evolutions.module.scss';

const Evolutions: FC<PropType> = ({ name }) => {
  return <div className={s.wrapper}></div>;
};
interface PropType {
  name: string;
}
export default memo(Evolutions);
