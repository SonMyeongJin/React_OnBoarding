import {type Dispatch, type SetStateAction, useCallback, useEffect, useState} from 'react';
import type {ConditionType} from '../model/type';

const BURNED_DAMAGE = 20;
const HEAL_CONDITION_COUNT = 1;

type BattleProps = {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
};

export function useBattle(pokemon: BattleProps, setMegaSinka: Dispatch<SetStateAction<boolean>>) {
    const [hp, setHp] = useState<number>(pokemon.hp);
    const [attack, setAttack] = useState<number>(pokemon.attack);
    const [defense, setDefense] = useState<number>(pokemon.defense);
    const [speed, setSpeed] = useState<number>(pokemon.speed);
    const [condition, setCondition] = useState<ConditionType>(null);
    const [conditionCount, setConditionCount] = useState<number>(0);

    useEffect(() => {
        setConditionCount(0);
    }, []);

    const onDamage = useCallback((damageValue: number, newCondition?: ConditionType) => {
        setHp((prevHP) => prevHP - damageValue * (defense / 100));
        newCondition && setCondition(newCondition);
    }, []);

    // turn が　終わる時の処理の集合
    const onTurnEnd = () => {
        if (condition === 'Burned') {
            setHp((prevHP) => prevHP - BURNED_DAMAGE);
        }

        // 0 =< Math.random() < 1.0
        setConditionCount((prevCount) => prevCount + Math.random());

        console.log(conditionCount);

        if (conditionCount >= HEAL_CONDITION_COUNT) {
            setCondition(null);
        }
    };

    const onEvolution = () => {
        setMegaSinka(true);
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
        {attack, condition, defense, hp, speed},
        {changeAttack, changeDefense, changeSpeed, onDamage, onEvolution, onTurnEnd},
    ] as const;
}
