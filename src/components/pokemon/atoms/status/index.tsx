'use client';

import { type FC, useMemo } from 'react';
import type { ConditionType } from '../../entities/pokemon/model/type';
import {
  burnedStyle,
  conditionStyle,
  hpBar,
  hpText,
  paralysisStyle,
  pokeLevel,
  pokemonName,
  status,
  statusHeader,
} from './index.css';

type StatusProps = {
  pokeName: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  condition: ConditionType;
};
// Todo : 麻痺、火傷
const Status: FC<StatusProps> = ({ pokeName, hp, attack, defense, speed, condition }) => {
  const currentHp = Math.max(0, Math.ceil(hp));
  const hpBarWidth = Math.min(100, currentHp);

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
      <div className={statusHeader}>
        <span className={pokemonName}>{pokeName}</span>
        <span className={pokeLevel}>♂️ Lv 40</span>
      </div>
      <div className={hpBar} style={{ background: hpColor, width: `${hpBarWidth}%` }} />
      <div className={hpText}>{currentHp}/100</div>

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
