'use client';

import { type FC, useMemo } from 'react';
import { hpBar, status } from './index.css';

type StatusProps = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};

const Status: FC<StatusProps> = ({ hp, attack, defense, speed }) => {
  const hpColor = useMemo(() => {
    if (hp > 80) {
      return 'green';
    }
    if (hp > 20) {
      return 'orange';
    }
    return 'red';
  }, [hp]);

  return (
    <div>
      <div className={hpBar} style={{ background: hpColor, width: `${hp}%` }} />

      <div className={status}>
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
