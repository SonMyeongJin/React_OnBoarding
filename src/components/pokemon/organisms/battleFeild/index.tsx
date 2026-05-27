import { type FC, useState } from 'react';
import { useBattle } from '../../entities/pokemon/battlePokemon';
import { usePokemon } from '../../entities/pokemon/getPokemon';
import PokeCard from '../PokeCard';
import { battleField, enemyStyle, playerStyle } from './index.css';

const BattleFeild: FC = () => {
  // turn ロジクは画面変化を探知する必要はないので、UseStateは使わない。
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [playerPokemon, setPlayerPokemon] = usePokemon('Pikachu');
  const [enemyPokemon, setEnemyPokemon] = usePokemon('Hitokage');

  if (playerPokemon === null || enemyPokemon === null) {
    return <div>playerPokemon or enemyPokemon null</div>;
  }

  const [_playerState, _playerActions] = useBattle(
    playerPokemon,
    setPlayerPokemon,
  );
  const [_enemyState, _enemyAction] = useBattle(enemyPokemon, setEnemyPokemon);

  // const [
  //     playerPokemon,
  //     {onDamage: onPlayerDamage, onEvolution: onPlayerEvolution},
  // ] = usePokemon('Pikachu');
  //
  // const [
  //     enemyPokemon,
  // ] = usePokemon('Hitokage');

  // 배틀
  // Const pokemon= usePokemon(‘Pikachu’);
  // Const [{hp }, {onDamage, onMegaShinka}] = useBattle(pokemon);

  return (
    <div className={battleField}>
      <div className={playerStyle}>
        {playerPokemon && (
          <PokeCard
            {...playerPokemon}
            isUIActive={isPlayerTurn}
            // isPlayerTurn これ　共有できない。。？
            onClickDamage={() => {
              onEnemyDamage(10);
              setIsPlayerTurn(false);
            }}
            onClickMegaSinka={onPlayerEvolution}
          />
        )}
      </div>

      <div className={enemyStyle}>
        {enemyPokemon && (
          <PokeCard
            {...enemyPokemon}
            isUIActive={!isPlayerTurn}
            // OnClickDamageは　PokeCardで　ただ執行することだけする。だから　onEnemyDamage　が動く。
            onClickDamage={() => {
              onPlayerDamage(10);
              setIsPlayerTurn(true);
            }}
            onClickMegaSinka={onEnemyEvolution}
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
