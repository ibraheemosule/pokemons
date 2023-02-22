import { FC } from 'react';
import s from './s_errorCard.module.scss';

const ErrorCard: FC<PropType> = (props) => {
  const { errMessage, onBtnClick, size = 'lg', btnText } = props;

  return (
    <div data-cy="error-card" className={s.error}>
      <h3>{errMessage}</h3>
      <button className={`${s.error_btn} ${s[size]}`} onClick={onBtnClick}>
        {btnText ?? 'retry'}
      </button>
    </div>
  );
};

interface PropType {
  errMessage: string;
  onBtnClick: () => void;
  size?: 'lg' | 'sm';
  btnText?: string;
}
export default ErrorCard;
