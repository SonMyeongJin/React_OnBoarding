import { useEffect, useState } from 'react';
import { getPokemon } from '../api';
import type { AttackType } from '../model/type';

type pokemonBattleInfo = {
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

const DefaultSkills = [
  {
    attackType: 'reduceSpeed' as AttackType,
    pp: 0,
    skillName: '0',
    skillType: '0',
  },
];

const DefaultPokemon: pokemonBattleInfo = {
  attack: 0,
  defense: 0,
  hp: 100,
  imageUrl: '',
  pokeName: '',
  skills: DefaultSkills,
  speed: 0,
};

export function usePokemon(name: string) {
  const [pokkemonBattleInfo, setPokemonBattleInfo] = useState<pokemonBattleInfo>(DefaultPokemon);

  useEffect(() => {
    getPokemon(name).then((pokemon) => {
      setPokemonBattleInfo({
        attack: pokemon.height,
        defense: pokemon.weight,
        hp: 100,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
        pokeName: pokemon.name,
        skills: [
          {
            attackType: 'reduceHP',
            pp: 5,
            skillName: pokemon.moves[1].move.name,
            skillType: pokemon.types[0].type.name,
          },
          {
            attackType: 'reduceSpeed',
            pp: 10,
            skillName: pokemon.moves[5].move.name,
            skillType: pokemon.types[0].type.name,
          },
          {
            attackType: 'burn',
            pp: 15,
            skillName: pokemon.moves[10].move.name,
            skillType: pokemon.types[0].type.name,
          },
          {
            attackType: 'paralysis',
            pp: 20,
            skillName: pokemon.moves[15].move.name,
            skillType: pokemon.types[0].type.name,
          },
        ],
        speed: pokemon.base_experience,
      });
    });
  }, [name]);

  return [pokkemonBattleInfo, setPokemonBattleInfo] as const;
}
