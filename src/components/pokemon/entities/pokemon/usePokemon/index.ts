import {useState} from 'react';
import {getPokemon} from '../api';
import type {Pokemon} from '../model/type';

export const useSearchPokemon = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  const searchPokemon = async (pokemonName: string) => {
    const pokemon = await getPokemon(pokemonName);
    setPokemonData(pokemon);
  };

  return [pokemonData, searchPokemon] as const;
};
