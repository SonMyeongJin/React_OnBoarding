'use client';

import { type FC, useMemo } from 'react';
import { status } from './index.css';

type StatusProps = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};

const Status: FC<StatusProps> = ({ hp, attack, defense, speed }) => {
  const isHpZero = useMemo(() => hp <= 0, [hp]);

  return (
    <div>
      <div className={status}>
        {isHpZero ? 'death' : `HP: ${hp}`}
        <br />
        Attack: {attack}
        <br />
        Defense: {defense}
        <br />
        Speed: {speed}
      </div>
    </div>
  );
};

export default Status;
