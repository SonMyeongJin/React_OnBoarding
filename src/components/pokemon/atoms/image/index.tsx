'use client';

import type { FC } from 'react';
import { dead, pokemonImage } from './index.css';

type ProfileProps = {
  pokeName: string;
  imageUrl: string;
  isDead: boolean;
};

const Image: FC<ProfileProps> = ({ pokeName, imageUrl, isDead }: ProfileProps) => {
  return (
    <div className={isDead ? dead : pokemonImage}>
      <img alt={pokeName} src={imageUrl} />
    </div>
  );
};

export default Image;

// hitokage.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
// pika.url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
