'use client';

import { useMemo } from 'react';

type StatusProps = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};

function Status({ hp, attack, defense, speed }: StatusProps) {
  const isHpZero = useMemo(() => hp <= 0, [hp]);

  return (
    <div>
      <h2>Status</h2>
      {isHpZero ? 'death' : `HP: ${hp}`}
      <br />
      Attack: {attack}
      <br />
      Defense: {defense}
      <br />
      Speed: {speed}
    </div>
  );
}

export default Status;
