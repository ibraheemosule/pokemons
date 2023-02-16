import { useMemo, useState } from 'react';
import { PokemonSprites } from '../../../../utils/ts-types';

export const useGetImages = (sprites: PokemonSprites) => {
  const [image, setImage] = useState(
    sprites.front_shiny || sprites.front_default
  );

  const imageUrls = useMemo(() => {
    const spriteUrls: string[] = [
      sprites?.back_default,
      sprites?.back_shiny,
      sprites?.front_default,
      sprites?.front_shiny,
      sprites?.other?.home?.front_default,
      sprites?.other?.home?.front_shiny,
      sprites?.other['official-artwork']?.front_default,
      sprites?.other['official-artwork']?.front_shiny,
    ];

    return spriteUrls.filter((url) => !!url) as string[];
  }, [sprites]);

  return { image, setImage, imageUrls };
};
