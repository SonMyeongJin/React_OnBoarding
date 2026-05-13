'use client';

import { buttonStyle } from '@molecules/bananaButton/index.css';
import { useMemo, useState } from 'react';

type ProfileProps = {
  isPika: boolean;
};

function Profile({ isPika }: ProfileProps) {
  // const [pikaUrl, setURL] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");

  const [megaSinka, setMega] = useState(false);

  const hitokageUrl = useMemo(() => {
    if (megaSinka) {
      return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png';
    }
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png';
  }, [megaSinka]);

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
}

export default Profile;
