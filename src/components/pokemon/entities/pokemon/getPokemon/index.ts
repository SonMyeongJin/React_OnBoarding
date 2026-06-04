import {type Dispatch, type SetStateAction, useMemo, useState} from 'react';
import type {AttackType} from '../model/type';

const DefaultPokemon = {
  attack: 0,
  defense: 0,
  hp: 0,
  imageUrl: '',
  pokeName: '',
  skillName1: '',
  skillName2: '',
  skillName3: '',
  skillName4: '',
  speed: 0,
} as const;
const DefaultSkills = [
  {
    attackType: 'reduceSpeed' as AttackType,
    pp: 0,
    skillName: '0',
    skillType: '0',
  },
];

const Pikachu = {
  attack: 50,
  defense: 30,
  hp: 100,
  imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  pokeName: 'pikacnu',

  skillName1: '尾振り',
  skillName2: 'Quick Attack',
  skillName3: 'Iron Tail',
  skillName4: 'Electro Ball',
  speed: 40,
} as const;

const Hitokage = {
  attack: 33,
  defense: 22,
  hp: 100,
  imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  pokeName: 'hitokage',
  skillName1: 'SpeedDown',
  skillName2: 'Scratch',
  skillName3: 'Ember',
  skillName4: 'Fire Spin',
  speed: 50,
} as const;

type Pokemon = {
  pokeName: string;
  imageUrl: string;
  skills: {
    skillName: string;
    skillType: string;
    pp: number;
    attackType: AttackType;
  }[];
  attack: number;
  defense: number;
  hp: number;
  speed: number;
};

const pikaSkills = [
  {
    attackType: 'reduceSpeed' as AttackType,
    pp: 15,
    skillName: Pikachu.skillName1,
    skillType: 'Electric',
  },
  {
    attackType: 'reduceHP' as AttackType,
    pp: 30,
    skillName: Pikachu.skillName2,
    skillType: 'Normal',
  },
  {
    attackType: 'burn' as AttackType,
    pp: 20,
    skillName: Pikachu.skillName3,
    skillType: 'Steel',
  },
  {
    attackType: 'paralysis' as AttackType,
    pp: 10,
    skillName: Pikachu.skillName4,
    skillType: 'Electric',
  },
];
const hitokageSkills = [
  {
    attackType: 'reduceSpeed' as AttackType,
    pp: 10,
    skillName: Hitokage.skillName1,
    skillType: 'fire',
  },
  {
    attackType: 'reduceHP' as AttackType,
    pp: 35,
    skillName: Hitokage.skillName2,
    skillType: 'normal',
  },
  {
    attackType: 'burn' as AttackType,
    pp: 25,
    skillName: Hitokage.skillName3,
    skillType: 'fire',
  },
  {
    attackType: 'paralysis' as AttackType,
    pp: 15,
    skillName: Hitokage.skillName4,
    skillType: 'fire',
  },
];

// tuple
type PokemonHooksReturn = readonly [Pokemon, Dispatch<SetStateAction<boolean>>];

export function usePokemon(name: string): PokemonHooksReturn {
  const [isMegaSinka, setMegaSinka] = useState(false);

  const pokemonData: Pokemon = useMemo(() => {
    switch (name) {
      case 'Pikachu': {
        if (isMegaSinka) {
          return {
            ...Pikachu,
            attack: Pikachu.attack + 25,
            defense: Pikachu.defense + 25,
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
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
        if (isMegaSinka) {
          return {
            ...Hitokage,
            attack: Hitokage.attack + 25,
            defense: Hitokage.defense + 25,
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
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
        return {
          ...DefaultPokemon,
          skills: DefaultSkills,
        };
    }
  }, [name, isMegaSinka]);

  return [{ ...pokemonData }, setMegaSinka] as const;
}
