'use client';

import {type FC, useMemo} from 'react';
import type {ConditionType} from '../../entities/pokemon/model/type';
import {burnedStyle, conditionStyle, hpBar, paralysisStyle, status} from './index.css';

type StatusProps = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  condition: ConditionType;
};
// Todo : 麻痺、火傷
const Status: FC<StatusProps> = ({ hp, attack, defense, speed, condition }) => {
  const hpColor = useMemo(() => {
    if (hp > 80) {
      return 'green';
    }
    if (hp > 30) {
      return 'orange';
    }
    return 'red';
  }, [hp]);

  const conditionClassName =
    condition === 'Burned' ? burnedStyle : condition === 'Paralysis' ? paralysisStyle : conditionStyle;

  return (
    <div>
      <div className={hpBar} style={{ background: hpColor, width: `${hp}%` }} />

      {condition && <div className={conditionClassName}>{condition}</div>}

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
