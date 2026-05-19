'use client';

import {buttonStyle} from '@molecules/bananaButton/index.css';
import {useMemo, useState} from 'react';

type StatusProps = {
    pokeIndex: number;
};

function Status({pokeIndex}: StatusProps) {

    const [hp, setHp] = useState(0);
    const [attack, setAttack] = useState(0);
    const [defense, setDefense] = useState(0);
    const [speed, setSpeed] = useState(0);

    function _pikaStatus() {
        setHp(100);
        setAttack(50);
        setDefense(30);
        setSpeed(20);
    }

    function _hitokageStatus() {
        setHp(100);
        setAttack(52);
        setDefense(43);
        setSpeed(65);
    }

    if (pokeIndex === 25) {
        // pikachu
        _pikaStatus
    }
    if (pokeIndex === 4) {
        // hitokage
        _hitokageStatus
    }

    const isHpZero = useMemo(() => hp <= 0, []);
    if (isHpZero) {
        alert('HPが0になりました！');
    }

    return (
        <div>
            <h2>Status</h2>
            HP: {hp}
            <br/>
            Attack: {attack}
            <br/>
            Defense: {defense}
            <br/>
            Speed: {speed}
            <button
                className={buttonStyle}
                onClick={() => setHp((hp: number) => hp - 10)}
                type="button"
            >
                Reduce HP
            </button>
        </div>
    );
}

export default Status;
