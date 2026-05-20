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
  speed: 40,
} as const;

const Hitokage = {
  attack: 33,
  defense: 22,
  hp: 100,
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  pokeName: 'hitokage',
  skill1: 'Flamethrower',
  skill2: 'Scratch',
  skill3: 'Ember',
  skill4: 'Fire Spin',
  speed: 50,
} as const;

export const usePokemon = (name: string) => {
  const [isMegaSinka, setMegaSinka] = useState(false);

  const onEvolution = useCallback(() => {
    setMegaSinka(true);
  }, []);

  const pokemonData = useMemo(() => {
    switch (name) {
      case 'Pikachu':
        if (isMegaSinka) {
          return {
            ...Pikachu,
            attack: Pikachu.attack + 25,
            defense: Pikachu.defense + 25,
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
            speed: Pikachu.speed - 25,
          };
        }
        return Pikachu;

      case 'Hitokage':
        if (isMegaSinka) {
          return {
            ...Hitokage,
            attake: Hitokage.attack + 25,
            defense: Hitokage.defense + 25,
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
            speed: Hitokage.speed - 5,
          };
        }
        return Hitokage;

      default:
        return null;
    }
  }, [name, isMegaSinka]);
  return [pokemonData, { onEvolution }] as const;
};
// const 변경할때 없을때 만 쓴다.
