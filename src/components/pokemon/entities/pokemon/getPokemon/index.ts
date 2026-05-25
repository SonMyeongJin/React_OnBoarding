import { useCallback, useEffect, useMemo, useState } from 'react';

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

type Pokemon = {
  pokeName: string;
  imageUrl: string;
  skills: { skillName: string; skillType: string; pp: number }[];
  attack: number;
  defense: number;
  hp: number;
  speed: number;
};

export function usePokemon(name: string): readonly [
  Pokemon | null,
  {
    onDamage: (damageValue: number, isTurn: boolean) => void;
    onEvolution: () => void;
  },
] {
  const [isMegaSinka, setMegaSinka] = useState(false);
  const [hp, setHp] = useState(100);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [speed, setSpeed] = useState(0);

  const onEvolution = useCallback(() => {
    setMegaSinka(true);
  }, []);

  const onDamage = useCallback((damageValue: number, isTurn: boolean) => {
    if (isTurn) {
      console.log(isTurn);
      setHp((prevHP) => prevHP - damageValue);
      isTurn = false;
      console.log(isTurn);
    }
  }, []);

  const pokemonData: Pokemon | null = useMemo(() => {
    switch (name) {
      case 'Pikachu': {
        const pikaSkills = [
          { pp: 15, skillName: Pikachu.skill1, skillType: 'Electric' },
          { pp: 30, skillName: Pikachu.skill2, skillType: 'Normal' },
          { pp: 20, skillName: Pikachu.skill3, skillType: 'Steel' },
          { pp: 10, skillName: Pikachu.skill4, skillType: 'Electric' },
        ];

        if (isMegaSinka) {
          return {
            ...Pikachu,
            attack: Pikachu.attack + 25,
            defense: Pikachu.defense + 25,
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
            skills: pikaSkills,
            speed: Pikachu.speed - 25,
          };
        }
        return {
          ...Pikachu,
          skills: pikaSkills,
        };
      }

      case 'Hitokage': {
        const hitokageSkills = [
          { pp: 10, skillName: Hitokage.skill1, skillType: 'fire' },
          { pp: 35, skillName: Hitokage.skill2, skillType: 'normal' },
          { pp: 25, skillName: Hitokage.skill3, skillType: 'fire' },
          { pp: 15, skillName: Hitokage.skill4, skillType: 'fire' },
        ];

        if (isMegaSinka) {
          return {
            ...Hitokage,
            attack: Hitokage.attack + 25,
            defense: Hitokage.defense + 25,
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
            skills: hitokageSkills,
            speed: Hitokage.speed - 5,
          };
        }
        return {
          ...Hitokage,
          skills: hitokageSkills,
        };
      }

      default:
        return null;
    }
  }, [name, isMegaSinka]);

  useEffect(() => {
    if (!pokemonData) {
      return;
    }
    setHp(pokemonData.hp);
    setAttack(pokemonData.attack);
    setDefense(pokemonData.defense);
    setSpeed(pokemonData.speed);
  }, [pokemonData]);

  if (!pokemonData) {
    return [null, { onDamage, onEvolution }] as const;
  }

  return [
    { ...pokemonData, attack, defense, hp, speed },
    { onDamage, onEvolution },
  ] as const;
}

// const 변경할때 없을때 만 쓴다.
