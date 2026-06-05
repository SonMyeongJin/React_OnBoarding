'use client';
import { type FC, useState } from 'react';
import { useBattleController } from '../../entities/pokemon/battleController';
import { usePokemon } from '../../entities/pokemon/getPokemon';
import type { AttackType } from '../../entities/pokemon/model/type';
import Skills from '../../molecules/skills';
import PokeCard from '../PokeCard';
import { battleField, battleSkillsStyle, enemyStyle, playerStyle } from './index.css';

const DAMAGE_VALUE = 25;

const BattleFeild: FC = () => {
  // turn ロジクは画面変化を探知する必要はないので、UseStateは使わない。
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  const [playerPokemon, setPlayerPokemon] = usePokemon('Pikachu');
  const [enemyPokemon, setEnemyPokemon] = usePokemon('Hitokage');
  const {
    playerPokemonStatus,
    playerPokemonActions,
    enemyPokemonStatus,
    enemyPokemonActions,
    playerAnimation,
    setPlayerAnimation,
    enemyAnimation,
    setEnemyAnimation,
  } = useBattleController({
    enemyPokemon,
    playerPokemon,
    setEnemyPokemon,
    setPlayerPokemon,
  });

  // const [playerPokemonStatus, playerPokemonActions] = useBattle(playerPokemon, setPlayerPokemon);
  // const [enemyPokemonStatus, enemyPokemonActions] = useBattle(enemyPokemon, setEnemyPokemon);
  // const [playerAnimation, setPlayerAnimation] = useState<AnimationType>('noAnimation');
  // const [enemyAnimation, setEnemyAnimation] = useState<AnimationType>('noAnimation');

  const playerSkills = playerPokemon.skills.map((index) => ({
    ...index,
    onClick: (attackType: AttackType) => {
      if (playerPokemonStatus.condition === 'Paralysis') {
        alert('麻痺状態のため、攻撃が失敗しました。');
        playerPokemonActions.onTurnEnd();
        setIsPlayerTurn(false);
        return;
      }

      switch (attackType) {
        case 'reduceHP':
          enemyPokemonActions.onDamage(DAMAGE_VALUE * (1 + playerPokemonStatus.attack / 100));
          setEnemyAnimation('fire');
          break;
        case 'reduceSpeed':
          enemyPokemonActions.changeSpeed(-10);
          setEnemyAnimation('tail');
          break;
        case 'burn':
          if (Math.random() < 0.5) {
            enemyPokemonActions.onDamage(10, 'Burned');
            setEnemyAnimation('burned');
          } else {
            alert('攻撃は失敗しました。');
          }
          break;
        case 'paralysis':
          if (Math.random() < 0.5) {
            enemyPokemonActions.onDamage(10, 'Paralysis');
            setEnemyAnimation('paralysis');
          } else {
            alert('攻撃は失敗しました。');
          }
          break;

        default:
          break;
      }

      playerPokemonActions.onTurnEnd();

      setTimeout(() => {
        setEnemyAnimation('noAnimation');
      }, 600);
      setIsPlayerTurn(false);
    },
  }));

  const enemySkills = enemyPokemon.skills.map((skill) => ({
    ...skill,
    onClick: (attackType: AttackType) => {
      if (enemyPokemonStatus.condition === 'Paralysis') {
        alert('麻痺状態のため、攻撃が失敗しました。');
        enemyPokemonActions.onTurnEnd();
        setIsPlayerTurn(true);
        return;
      }
      switch (attackType) {
        case 'reduceHP':
          playerPokemonActions.onDamage(DAMAGE_VALUE * (1 + enemyPokemonStatus.attack / 100));
          setPlayerAnimation('fire');
          break;
        case 'reduceSpeed':
          playerPokemonActions.changeSpeed(-10);
          setPlayerAnimation('tail');
          break;
        case 'burn':
          if (Math.random() < 0.5) {
            playerPokemonActions.onDamage(10, 'Burned');
            setPlayerAnimation('burned');
          } else {
            alert('攻撃は失敗しました。');
          }
          break;
        case 'paralysis':
          if (Math.random() < 0.5) {
            playerPokemonActions.onDamage(0, 'Paralysis');
            setPlayerAnimation('paralysis');
          } else {
            alert('攻撃は失敗しました。');
          }
          break;
        default:
          break;
      }
      enemyPokemonActions.onTurnEnd();

      setTimeout(() => {
        setPlayerAnimation('noAnimation');
      }, 600);

      setIsPlayerTurn(true);
    },
  }));

  return (
    <div className={battleField}>
      <div className={playerStyle}>
        {playerPokemon && (
          <PokeCard
            Animation={playerAnimation}
            attack={playerPokemonStatus.attack}
            condition={playerPokemonStatus.condition}
            defense={playerPokemonStatus.defense}
            hp={playerPokemonStatus.hp}
            imageUrl={playerPokemon.imageUrl}
            isDead={playerPokemonStatus.hp <= 0}
            isSkillsActive={isPlayerTurn}
            onClickMegaSinka={playerPokemonActions.onEvolution}
            pokeName={playerPokemon.pokeName}
            speed={playerPokemonStatus.speed}
          />
        )}
      </div>

      <div className={enemyStyle}>
        {enemyPokemon && (
          <PokeCard
            Animation={enemyAnimation}
            attack={enemyPokemonStatus.attack}
            condition={enemyPokemonStatus.condition}
            defense={enemyPokemonStatus.defense}
            hp={enemyPokemonStatus.hp}
            imageUrl={enemyPokemon.imageUrl}
            isDead={enemyPokemonStatus.hp <= 0}
            isSkillsActive={!isPlayerTurn}
            onClickMegaSinka={enemyPokemonActions.onEvolution}
            pokeName={enemyPokemon.pokeName}
            speed={enemyPokemonStatus.speed}
          />
        )}
      </div>

      <div className={battleSkillsStyle}>
        {enemyPokemonStatus.hp > 0 && playerPokemonStatus.hp > 0 && (
          <Skills skills={isPlayerTurn ? playerSkills : enemySkills} />
        )}
      </div>
    </div>
  );
};

export default BattleFeild;
