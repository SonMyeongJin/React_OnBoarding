'use client';

import type { FC } from 'react';

export const Profile: FC = () => {
  const url =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';

  return (
    <div>
      <img alt="Pikachu" src={url} />
    </div>
  );
};
