import { type FC, useState } from 'react';
import { useBattle } from '../../entities/pokemon/battlePokemon';
import { usePokemon } from '../../entities/pokemon/getPokemon';
import type { AnimationType, AttackType } from '../../entities/pokemon/model/type';
import PokeCard from '../PokeCard';
import { battleField, enemyStyle, playerStyle } from './index.css';

const BattleFeild: FC = () => {
  // turn ロジクは画面変化を探知する必要はないので、UseStateは使わない。
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true);
  const [playerPokemon, setPlayerPokemon] = usePokemon('Pikachu');
  const [enemyPokemon, setEnemyPokemon] = usePokemon('Hitokage');
  if (playerPokemon === null || enemyPokemon === null) {
    return <div>playerPokemon or enemyPokemon null</div>;
  }

  const [playerPokemonStatus, playerPokemonActions] = useBattle(playerPokemon, setPlayerPokemon);
  const [enemyPokemonStatus, enemyPokemonActions] = useBattle(enemyPokemon, setEnemyPokemon);
  const [playerAnimation, setPlayerAnimation] = useState<AnimationType>('noAnimation');
  const [enemyAnimation, setEnemyAnimation] = useState<AnimationType>('noAnimation');

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
            // Todo : onClick 別の関数で抽出してCallbackする。
            skills={playerPokemon.skills.map((index) => ({
              ...index,
              // onClick : => useCallback()
              onClick: (attackType: AttackType) => {
                switch (attackType) {
                  case 'reduceHP':
                    enemyPokemonActions.onDamage(25);
                    setEnemyAnimation('fire');
                    break;
                  case 'reduceSpeed':
                    enemyPokemonActions.changeSpeed(-10);
                    setEnemyAnimation('tail');
                    break;
                  case 'burn':
                    enemyPokemonActions.onDamage(10, 'Burned');
                    setEnemyAnimation('burned');
                    break;
                  case 'paralysis':
                    enemyPokemonActions.onDamage(10, 'Paralysis');
                    setEnemyAnimation('paralysis');
                    break;
                }

                playerPokemonActions.onTurnEnd();

                setTimeout(() => {
                  setEnemyAnimation('noAnimation');
                }, 600);
                setIsPlayerTurn(false);
              },
            }))}
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
            skills={enemyPokemon.skills.map((skill) => ({
              ...skill,
              onClick: (attackType: AttackType) => {
                switch (attackType) {
                  case 'reduceHP':
                    playerPokemonActions.onDamage(25);
                    setPlayerAnimation('fire');
                    break;
                  case 'reduceSpeed':
                    playerPokemonActions.changeSpeed(-10);
                    setPlayerAnimation('tail');
                    break;
                  case 'burn':
                    playerPokemonActions.onDamage(10, 'Burned');
                    setPlayerAnimation('burned');
                    break;
                  case 'paralysis':
                    playerPokemonActions.onDamage(0, 'Paralysis');
                    setPlayerAnimation('paralysis');
                    break;
                }
                enemyPokemonActions.onTurnEnd();

                setTimeout(() => {
                  setPlayerAnimation('noAnimation');
                }, 600);

                setIsPlayerTurn(true);
              },
            }))}
            speed={enemyPokemonStatus.speed}
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
