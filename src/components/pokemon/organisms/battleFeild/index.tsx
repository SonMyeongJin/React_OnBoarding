'use client';
import { type FC, useEffect, useRef, useState } from 'react';
import ChangeButton from '../../atoms/changeButton';
import ChangeForm from '../../atoms/changeForm';
import { useBattleController } from '../../entities/pokemon/battleController';
import { usePokemon } from '../../entities/pokemon/getPokemon';
import type { AttackType } from '../../entities/pokemon/model/type';
import Skills from '../../molecules/skills';
import PokeCard from '../PokeCard';
import {
  attackFailedMessageStyle,
  battleField,
  battleSkillsStyle,
  ChangeButtonStyle,
  ChangeFormStyle,
  enemyStyle,
  paralysisMessageStyle,
  playerStyle,
} from './index.css';

const DAMAGE_VALUE = 25;
const AUTO_ENEMY_ATTACK_DELAY_MS = 1500;
const MAX_SKILL_COUNT = 4;

const BattleFeild: FC = () => {
  // turn ロジクは画面変化を探知する必要はないので、UseStateは使わない。
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  const [isAttackFailed, setIsAttackFailed] = useState<boolean>(false);
  const [isParalysis, setIsParalysis] = useState<boolean>(false);
  const isEnemyTurnInProgress = useRef<boolean>(false);
  const [playerPokemonName, setPlayerPokemonName] = useState('pikachu');
  const [playerPokemon] = usePokemon(playerPokemonName);
  const [enemyPokemon] = usePokemon('Charmander');
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
  });

  const [isFormActive, setIsFormActive] = useState(false);

  const showAttackFailedMessage = () => {
    setIsAttackFailed(true);
    setTimeout(() => {
      setIsAttackFailed(false);
    }, 1000);
  };

  const canNotMoveByParalysis = () => {
    setIsParalysis(true);
    setTimeout(() => {
      setIsParalysis(false);
    }, 1000);
  };

  // const [playerPokemonStatus, playerPokemonActions] = useBattle(playerPokemon, setPlayerPokemon);
  // const [enemyPokemonStatus, enemyPokemonActions] = useBattle(enemyPokemon, setEnemyPokemon);
  // const [playerAnimation, setPlayerAnimation] = useState<AnimationType>('noAnimation');
  // const [enemyAnimation, setEnemyAnimation] = useState<AnimationType>('noAnimation');

  const playerSkills = playerPokemon.skills.map((index) => ({
    ...index,
    onClick: (attackType: AttackType) => {
      if (!isPlayerTurn) {
        return;
      }

      if (playerPokemonStatus.condition === 'Paralysis') {
        canNotMoveByParalysis();
        //alert('麻痺状態のため、攻撃が失敗しました。');
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
            showAttackFailedMessage();
            //alert('攻撃は失敗しました。');
          }
          break;
        case 'paralysis':
          if (Math.random() < 0.5) {
            enemyPokemonActions.onDamage(10, 'Paralysis');
            setEnemyAnimation('paralysis');
          } else {
            showAttackFailedMessage();
            //alert('攻撃は失敗しました。');
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
        canNotMoveByParalysis();
        //alert('麻痺状態のため、攻撃が失敗しました。');
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
            showAttackFailedMessage();
            //alert('攻撃は失敗しました。');
          }
          break;
        case 'paralysis':
          if (Math.random() < 0.5) {
            playerPokemonActions.onDamage(0, 'Paralysis');
            setPlayerAnimation('paralysis');
          } else {
            showAttackFailedMessage();
            //alert('攻撃は失敗しました。');
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

  //-------------------------- AI 에게 요청  상대방움직임 랜덤하게 자동으로 움직이도록 -------------------
  // Todo： enemy turn auto
  // Todo : useEffect 使わない　＋　isEnemyTurnInProgress　何かいらないと思う、使う理由をわからん
  // Todo : useCallback -> どこかに呼び出してみよう
  useEffect(() => {
    if (isPlayerTurn || enemyPokemonStatus.hp <= 0 || playerPokemonStatus.hp <= 0) {
      isEnemyTurnInProgress.current = false;
      return;
    }

    if (isEnemyTurnInProgress.current) {
      return;
    }

    isEnemyTurnInProgress.current = true;

    const timerId = window.setTimeout(() => {
      const selectableEnemySkills = enemySkills.slice(0, MAX_SKILL_COUNT);

      if (selectableEnemySkills.length === 0) {
        isEnemyTurnInProgress.current = false;
        setIsPlayerTurn(true);
        return;
      }

      const randomSkill = selectableEnemySkills[Math.floor(Math.random() * selectableEnemySkills.length)];

      randomSkill?.onClick(randomSkill.attackType);
      isEnemyTurnInProgress.current = false;
    }, AUTO_ENEMY_ATTACK_DELAY_MS);

    return () => {
      window.clearTimeout(timerId); // cancel
      isEnemyTurnInProgress.current = false; // resset ref
    };
  }, [isPlayerTurn, enemyPokemonStatus.hp, playerPokemonStatus.hp, enemySkills]);
  //-------------------------------------------------------------------------------------------------

  return (
    <div className={battleField}>
      {isAttackFailed && <div className={attackFailedMessageStyle}>攻撃失敗!</div>}
      {isParalysis && <div className={paralysisMessageStyle}>麻痺で動けなかった。。</div>}
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
            // onClickMegaSinka={playerPokemonActions.onEvolution}
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
            // onClickMegaSinka={enemyPokemonActions.onEvolution}
            pokeName={enemyPokemon.pokeName}
            speed={enemyPokemonStatus.speed}
          />
        )}
      </div>

      <div className={ChangeFormStyle}>
        {isFormActive && (
          <ChangeForm
            onClick={(name: string) => {
              setPlayerPokemonName(name);
            }}
          />
        )}
      </div>

      <div className={battleSkillsStyle}>
        <div className={ChangeButtonStyle}>
          <ChangeButton
            onClick={() => {
              setIsFormActive((prev) => !prev);
            }}
          />
        </div>
        {enemyPokemonStatus.hp > 0 && playerPokemonStatus.hp > 0 && (
          <Skills disabled={!isPlayerTurn} skills={playerSkills} />
        )}
      </div>
    </div>
  );
};

export default BattleFeild;
