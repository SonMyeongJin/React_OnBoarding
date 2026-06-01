import {type Dispatch, type SetStateAction, useState} from 'react';
import type {ConditionType} from '../model/type';

type BattleProps = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};

export function useBattle(
  pokemon: BattleProps,
  condition: ConditionType,
  setMegaSinka: Dispatch<SetStateAction<boolean>>,
) {
  const [HP, setHp] = useState(pokemon.hp);
  const [ATTACK, setAttack] = useState(pokemon.attack);
  const [DEFENSE, setDefense] = useState(pokemon.defense);
  const [SPEED, setSpeed] = useState(pokemon.speed);
  const [CONDITION, setCondition] = useState(condition);

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
  const changeCondition = (Value: ConditionType) => {
    setCondition(Value);
  };

  return [
    { ATTACK, CONDITION, DEFENSE, HP, SPEED },
    { changeAttack, changeCondition, changeDefense, changeSpeed, onDamage, onEvolution },
  ] as const;
}
