import { Dispatch, FC, memo, SetStateAction } from 'react';
import s from './s_images.module.scss';

const Images: FC<PropType> = ({ setImage, imageUrls }) => {
  return (
    <div className={s.content}>
      <h3 className={s.content_title}>Images</h3>
      <div className={s.images_wrapper}>
        {imageUrls.map((url, i) => (
          <button key={i} onClick={() => setImage(url)}>
            <img src={url} alt="pokemon" />
          </button>
        ))}
      </div>
    </div>
  );
};

interface PropType {
  setImage: Dispatch<SetStateAction<string>>;
  imageUrls: string[];
}

export default memo(Images);
