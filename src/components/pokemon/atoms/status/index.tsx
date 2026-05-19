'use client';

import {buttonStyle} from '@molecules/bananaButton/index.css';
import {useMemo, useState} from 'react';

type StatusProps = {
    pokeIndex: number;
};

function Status({pokeIndex}: StatusProps) {

    function pikaStatus() {
        return {
            hp: 100,
            attack: 50,
            defense: 30,
            speed: 20,
        };
    }

    function hitokageStatus() {
        return {
            hp: 120,
            attack: 60,
            defense: 40,
            speed: 25,
        };
    }
    if (pokeIndex ==

    const [hp, setHp] = useState(100);
    const attack = 50;
    const defense = 30;
    const speed = 20;

    const isHpZero = useMemo(() => hp <= 0, [hp]);
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
