'use client';

import { buttonStyle } from '@molecules/bananaButton/index.css';
import { useMemo, useState } from 'react';

function Status() {
  const [hp, setHp] = useState(100);
  const attack = 50;
  const defense = 30;
  const speed = 20;

  const isHpZero = useMemo(() => hp <= 0, [hp]);
  if (isHpZero) {
    alert('HPが0になりました！');
  }

  // 이거 왜안돼?
  // const hpZeroAl₩ert = useMemo( () => {
  //     if(hp <= 0) {
  //        return  alert('HPが0になりました！');
  //     }
  // }, [hp]);

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
      <button
        className={buttonStyle}
        onClick={() => setHp((hp: number) => hp - 10)}
        type="button"
      >
        Reduce HP
      </button>
    </div>
  );
}

export default Status;
