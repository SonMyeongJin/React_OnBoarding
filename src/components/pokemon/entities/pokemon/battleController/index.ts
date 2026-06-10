import { useState } from 'react';
import { useBattle } from '../battlePokemon';
import type { usePokemon } from '../getPokemon';
import type { AnimationType } from '../model/type';

type UsePokemonReturn = ReturnType<typeof usePokemon>;
type BattlePokemon = NonNullable<UsePokemonReturn[0]>;

type BattleProps = {
  playerPokemon: BattlePokemon;
  enemyPokemon: BattlePokemon;
};

export function useBattleController(battleProps: BattleProps) {
  const [playerPokemonStatus, playerPokemonActions] = useBattle(battleProps.playerPokemon);
  const [enemyPokemonStatus, enemyPokemonActions] = useBattle(battleProps.enemyPokemon);
  const [playerAnimation, setPlayerAnimation] = useState<AnimationType>('noAnimation');
  const [enemyAnimation, setEnemyAnimation] = useState<AnimationType>('noAnimation');

  return {
    enemyAnimation,
    enemyPokemonActions,
    enemyPokemonStatus,
    playerAnimation,
    playerPokemonActions,
    playerPokemonStatus,
    setEnemyAnimation,
    setPlayerAnimation,
  } as const;
}

export type BattleController = ReturnType<typeof useBattleController>;
