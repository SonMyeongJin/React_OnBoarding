'use client';

import type { FC } from 'react';
import { pokemonImage } from './index.css';

type ProfileProps = {
  pokeName: string;
  imageUrl: string;
};

const Image: FC<ProfileProps> = ({ pokeName, imageUrl }) => {
  return (
    <div className={pokemonImage}>
      <img alt={pokeName} src={imageUrl} />
    </div>
  );
};

export default Image;

// hitokage.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
// pika.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
