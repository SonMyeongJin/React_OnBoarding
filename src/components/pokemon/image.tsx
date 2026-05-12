'use client';

import type { FC } from 'react';

export const Profile: FC = (isPika) => {
  const pikaUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
  const hitokageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png';

  if (isPika) {
    return (
      <div>
        <img alt="Hitokage" src={hitokageUrl} />
      </div>
    );
  }

  return (
    <div>
      <img alt="Pikachu" src={pikaUrl} />
    </div>
  );
};
