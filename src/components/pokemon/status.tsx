'use client';

import type { FC } from 'react';

export const Status: FC = () => {
  const hp = 100;
  const attack = 50;
  const defense = 30;
  const speed = 20;

  return (
    <div>
      <h2>Status</h2>
      HP: {hp}
      <br />
      Attack: {attack}
      <br />
      Defense: {defense}
      <br />
      Speed: {speed}
    </div>
  );
};
