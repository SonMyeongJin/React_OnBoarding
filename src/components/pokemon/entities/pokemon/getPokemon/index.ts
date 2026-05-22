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

export function usePokemon(name: string) {
  const [isMegaSinka, setMegaSinka] = useState(false);
  const [damagedHp, setHp] = useState(100);

  const onEvolution = useCallback(() => {
    setMegaSinka(true);
  }, []);

  const onDamage = useCallback((damageValue: number) => {
    setHp((prevHP) => prevHP - damageValue);
  }, []);

  const pokemonData = useMemo(() => {
    switch (name) {
      case 'Pikachu':
        if (isMegaSinka) {
          return {
            ...Pikachu,
            attack: Pikachu.attack + 25,
            defense: Pikachu.defense + 25,
            hp: damagedHp,
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
            speed: Pikachu.speed - 25,
          };
        }
        return {
          ...Pikachu,
          hp: damagedHp,
        };

      case 'Hitokage':
        if (isMegaSinka) {
          return {
            ...Hitokage,
            attack: Hitokage.attack + 25,
            defense: Hitokage.defense + 25,
            hp: damagedHp,
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
            speed: Hitokage.speed - 5,
          };
        }
        return {
          ...Hitokage,
          hp: damagedHp,
        };

      default:
        return null;
    }
  }, [name, isMegaSinka, damagedHp]);

  return [pokemonData, { onDamage, onEvolution }] as const;
}

// const 변경할때 없을때 만 쓴다.
