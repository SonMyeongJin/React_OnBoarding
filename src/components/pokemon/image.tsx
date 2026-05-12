'use client';

import { buttonStyle } from '@molecules/bananaButton/index.css';
import { type FC, useMemo, useState } from 'react';

export const Profile: FC = (isPika) => {
  // const [pikaUrl, setURL] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");

  const hitokageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png';

  const [megaSinka, setMega] = useState(false);

  const pikaUrl = useMemo(() => {
    if (megaSinka) {
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png';
    }
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
  }, [megaSinka]);

  if (isPika) {
    return (
      <div>
        <img alt="Hitokage" src={pikaUrl} />
        <button
          className={buttonStyle}
          onClick={() => setMega((megaSinka) => !megaSinka)}
          type="button"
        >
          メガシンカ
        </button>
      </div>
    );
  }
  return (
    <div>
      <img alt="Pikachu" src={hitokageUrl} />
      <button
        className={buttonStyle}
        onClick={() => setMega((megaSinka) => !megaSinka)}
        type="button"
      >
        メガシンカ
      </button>
    </div>
  );
};
