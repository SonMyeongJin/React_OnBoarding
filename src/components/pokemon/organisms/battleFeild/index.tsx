import {type FC, useState} from 'react';
import {useBattle} from '../../entities/pokemon/battlePokemon';
import {usePokemon} from '../../entities/pokemon/getPokemon';
import type {AnimationType, AttackType, ConditionType} from '../../entities/pokemon/model/type';
import PokeCard from '../PokeCard';
import {battleField, enemyStyle, playerStyle} from './index.css';

const BattleFeild: FC = () => {
  // turn ロジクは画面変化を探知する必要はないので、UseStateは使わない。
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [playerPokemon, setPlayerPokemon] = usePokemon('Pikachu');
  const [enemyPokemon, setEnemyPokemon] = usePokemon('Hitokage');
  const [playerCondion, setPlayerCondition] = useState<ConditionType>(null);
  const [enemyCondition, setEnemyCondition] = useState<ConditionType>(null);

  if (playerPokemon === null || enemyPokemon === null) {
    return <div>playerPokemon or enemyPokemon null</div>;
  }

  const [playerState, playerActions] = useBattle(playerPokemon, playerCondion, setPlayerPokemon);
  const [enemyState, enemyAction] = useBattle(enemyPokemon, enemyCondition, setEnemyPokemon);
  const [playerAnimation, setPlayerAnimation] = useState<AnimationType>('noAnimation');
  const [enemyAnimation, setEnemyAnimation] = useState<AnimationType>('noAnimation');

  return (
    <div className={battleField}>
      <div className={playerStyle}>
        {playerPokemon && (
          <PokeCard
            Animation={playerAnimation}
            attack={playerState.ATTACK}
            condition={playerCondion}
            defense={playerState.DEFENSE}
            hp={playerState.HP}
            imageUrl={playerPokemon.imageUrl}
            isDead={playerState.HP <= 0}
            isSkillsActive={isPlayerTurn}
            onClickMegaSinka={playerActions.onEvolution}
            pokeName={playerPokemon.pokeName}
            // Todo : onClick 別の関数で抽出してCallbackする。
            skills={playerPokemon.skills.map((index) => ({
              ...index,
              // onClick : => useCallback()
              onClick: (attackType: AttackType) => {
                if (attackType === 'reduceHP') {
                  enemyAction.onDamage(25);
                  setEnemyAnimation('fire');
                }
                if (attackType === 'reduceSpeed') {
                  enemyAction.changeSpeed(-10);
                  setEnemyAnimation('tail');
                }
                if (attackType === 'burn') {
                  setEnemyCondition('Burned');
                  setEnemyAnimation('burned');
                }
                if (attackType === 'paralysis') {
                  setEnemyCondition('Paralysis');
                  setEnemyAnimation('paralysis');
                }

                setTimeout(() => {
                  setEnemyAnimation('noAnimation');
                }, 600);

                setIsPlayerTurn(false);
              },
            }))}
            speed={playerState.SPEED}
          />
        )}
      </div>

      <div className={enemyStyle}>
        {enemyPokemon && (
          <PokeCard
            Animation={enemyAnimation}
            attack={enemyState.ATTACK}
            condition={enemyCondition}
            defense={enemyState.DEFENSE}
            hp={enemyState.HP}
            imageUrl={enemyPokemon.imageUrl}
            isDead={enemyState.HP <= 0}
            isSkillsActive={!isPlayerTurn}
            onClickMegaSinka={enemyAction.onEvolution}
            pokeName={enemyPokemon.pokeName}
            skills={enemyPokemon.skills.map((skill) => ({
              ...skill,
              onClick: (attackType: AttackType) => {
                if (attackType === 'reduceHP') {
                  playerActions.onDamage(25);
                  setPlayerAnimation('fire');
                }
                if (attackType === 'reduceSpeed') {
                  playerActions.changeSpeed(-10);
                  setPlayerAnimation('tail');
                }
                if (attackType === 'burn') {
                  setPlayerCondition('Burned');
                  setPlayerAnimation('burned');
                }
                if (attackType === 'paralysis') {
                  setPlayerCondition('Paralysis');
                  setPlayerAnimation('paralysis');
                }

                setTimeout(() => {
                  setPlayerAnimation('noAnimation');
                }, 600);

                setIsPlayerTurn(true);
              },
            }))}
            speed={enemyState.SPEED}
          />
        )}
      </div>
    </div>
  );
};

// playerPokemon 가 False 면 뒤에 실행 안함
// PlayerPokemon이 존재할 때만 PokeCard를 렌더링하고, onClickMegaSinka 이벤트 핸들러로 onPlayerEvolution 함수를 전달합니다.
//{playerPokemon && <PokeCard {...playerPokemon} onClickMegaSinka={onPlayerEvolution}/>}

export default BattleFeild;
