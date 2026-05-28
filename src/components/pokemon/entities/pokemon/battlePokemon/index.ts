import { type Dispatch, type SetStateAction, useState } from 'react';

type BattleProps = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};

export function useBattle(
  pokemon: BattleProps,
  setMegaSinka: Dispatch<SetStateAction<boolean>>,
) {
  const [HP, setHp] = useState(pokemon.hp);
  const [ATTACK, setAttack] = useState(pokemon.attack);
  const [DEFENSE, setDefense] = useState(pokemon.defense);
  const [SPEED, setSpeed] = useState(pokemon.speed);

  const onEvolution = () => {
    setMegaSinka(true);
  };
  const onDamage = (damageValue: number) => {
    setHp((prevHP) => prevHP - damageValue);
  };
  const changeAttack = (Value: number) => {
    setAttack((prevAttack) => prevAttack + Value);
  };
  const changeDefense = (Value: number) => {
    setDefense((prevDefense) => prevDefense + Value);
  };
  const changeSpeed = (Value: number) => {
    setSpeed((prevSpeed) => prevSpeed + Value);
  };

  return [
    { ATTACK, DEFENSE, HP, SPEED },
    { changeAttack, changeDefense, changeSpeed, onDamage, onEvolution },
  ] as const;
}
