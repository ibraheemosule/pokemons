import { Dispatch, FC, memo, SetStateAction } from 'react';
import s from './s_images.module.scss';

const Images: FC<PropType> = ({ setImage, imageUrls, image }) => {
  return (
    <div data-cy="images" className={s.content}>
      <h3 className={s.content_title}>Images</h3>
      <div className={s.images_wrapper}>
        {imageUrls.map((url, i) => (
          <button
            key={i}
            onClick={() => setImage(url)}
            className={`${image === url && s.images_border}`}
          >
            <img data-cy="mini-image" src={url} alt="pokemon" />
          </button>
        ))}
      </div>
    </div>
  );
};

interface PropType {
  setImage: Dispatch<SetStateAction<string>>;
  imageUrls: string[];
  image: string;
}

export default memo(Images);
