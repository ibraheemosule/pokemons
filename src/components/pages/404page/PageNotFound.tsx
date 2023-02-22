import { FC } from 'react';
import s from './s_page-not-found.module.scss';
import { Link } from 'react-router-dom';

const PageNotFound: FC = () => {
  return (
    <div className={s.notFound}>
      <div>
        <h3>Page Not Found</h3>
        <Link to="/" className={s.notFound__link}>
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
