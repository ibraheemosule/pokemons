import { FC } from 'react';
import s from './s_heading.module.scss';

const Heading: FC<PropType> = ({ name, image, id }) => {
  return (
    <div className={s.heading}>
      <div className={s.name}>
        <h3>{name}</h3>
        <div>
          <span>
            <strong>ID:</strong> {id}
          </span>
        </div>
      </div>
      <div className={s.img_wrapper}>
        <img data-cy="pokedex-image" src={image} alt="pokemon" />
      </div>
    </div>
  );
};

interface PropType {
  image: string;
  name: string;
  id: number;
}

export default Heading;
