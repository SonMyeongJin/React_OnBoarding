import { useCallback, useEffect, useState } from 'react';
import type { ConditionType } from '../model/type';

const BURNED_DAMAGE = 20;
const HEAL_CONDITION_COUNT = 5;

type BattleProps = {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
};

export function useBattle(pokemon: BattleProps) {
  const [hp, setHp] = useState<number>(pokemon.hp);
  const [attack, setAttack] = useState<number>(pokemon.attack);
  const [defense, setDefense] = useState<number>(pokemon.defense);
  const [speed, setSpeed] = useState<number>(pokemon.speed);
  const [condition, setCondition] = useState<ConditionType>(null);
  const [conditionCount, setConditionCount] = useState<number>(0);
  const [isBurnedMessage, setIsBurnedMessage] = useState<boolean>(false);

  useEffect(() => {
    setHp(pokemon.hp);
    setAttack(pokemon.attack);
    setDefense(pokemon.defense);
    setSpeed(pokemon.speed);
  }, [pokemon.hp, pokemon.attack, pokemon.defense, pokemon.speed]);

  const onDamage = useCallback(
    (damageValue: number, newCondition?: ConditionType) => {
      setHp((prevHP) => prevHP - damageValue * (defense / 100));
      newCondition && setCondition(newCondition);
    },
    [defense],
  );

  // turn が　終わる時の処理の集合
  const onTurnEnd = useCallback(() => {
    if (condition === 'Burned') {
      setTimeout(() => {
        setIsBurnedMessage(true);

        setTimeout(() => {
          setIsBurnedMessage(false);
          setHp((prevHP) => prevHP - BURNED_DAMAGE);
        }, 2000);
      }, 1000);
    }

    // 0 =< Math.random() < 1.0
    // 0 =< 10*Math.random() < 10
    // Math.floor(10 * Math.random()) = 0 ~ 9 の整数
    // Math.floor((10 * Math.random()) / 2 ) = 1 ~ 5 の整数

    // 0 ~ 5
    setConditionCount((prevCount) => prevCount + 1);

    // min =< return < max
    function getRandomArbitrary(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    const healConditionCount = getRandomArbitrary(2, HEAL_CONDITION_COUNT);

    console.log('👍', conditionCount, '👹', healConditionCount, conditionCount >= healConditionCount);
    console.log(speed, condition);

    if (conditionCount >= healConditionCount) {
      console.log('heal');
      setCondition(null);
      console.log(condition); // -> no null
    }
  }, [condition, conditionCount, speed]);

  // const onEvolution = () => {
  //   setMegaSinka(true);
  // };
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
    { attack, condition, defense, hp, isBurnedMessage, speed },
    { changeAttack, changeDefense, changeSpeed, onDamage, onTurnEnd },
  ] as const;
}
