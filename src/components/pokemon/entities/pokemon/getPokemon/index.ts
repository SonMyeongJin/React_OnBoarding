import { useCallback, useMemo, useState } from 'react';

const Pikachu = {
  attack: 50,
  defense: 30,
  hp: 100,
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  pokeName: 'pikacnu',

  skill1: 'Thunderbolt',
  skill2: 'Quick Attack',
  skill3: 'Iron Tail',
  skill4: 'Electro Ball',
  speed: 20,
} as const;

const Hitokage = {
  attack: 33,
  defense: 22,
  hp: 255,
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  pokeName: 'hitokage',
  skill1: 'Flamethrower',
  skill2: 'Scratch',
  skill3: 'Ember',
  skill4: 'Fire Spin',
  speed: 11,
} as const;

export const usePokemon = (name: string) => {
  const [isMegaSinka, setMegaSinka] = useState(false);

  const onEvolution = useCallback(() => {
    setMegaSinka(true);
    console.log('進化しました！');
  }, []);

  const pokemonData = useMemo(() => {
    switch (name) {
      case 'Pikachu':
        if (isMegaSinka) {
          return {
            ...Pikachu,
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
          };
        }

        return Pikachu;
      case 'Hitokage':
        return Hitokage;
      default:
        return null;
    }
  }, [name, isMegaSinka]);
  return [pokemonData, { onEvolution }] as const;
};
// const 변경할때 없을때 만 쓴다.
