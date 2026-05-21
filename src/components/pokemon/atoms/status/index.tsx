'use client';

import { type FC, useMemo } from 'react';
import { hpFill, status } from './index.css';

type StatusProps = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};

const Status: FC<StatusProps> = ({ hp, attack, defense, speed }) => {
  const _isHpZero = useMemo(() => hp <= 0, [hp]);

  const hpColor = useMemo(() => {
    if (hp > 60) {
      return '#22c55e';
    }
    if (hp > 30) {
      return '#f59e0b';
    }
    return '#ef4444';
  }, [hp]);

  return (
    <div>
      <div className={status}>
        {/*{isHpZero ? 'death' : `HP: ${hp}`}*/}
        <div
          className={hpFill}
          style={{ backgroundColor: hpColor, width: `${hp}%` }}
        />
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
