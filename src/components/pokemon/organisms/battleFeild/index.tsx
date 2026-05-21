import type { FC } from 'react';
import { usePokemon } from '../../entities/pokemon/getPokemon';
import PokeCard from '../PokeCard';
import { battleField, enemyStyle, playerStyle } from './index.css';

const BattleFeild: FC = () => {
  // usePokemon return 값이 [pokemonData, { onEvolution, onDamage }]
  const [
    playerPokemon,
    { onDamage: onPlayerDamage, onEvolution: onPlayerEvolution },
  ] = usePokemon('Pikachu');

  const [
    enemyPokemon,
    { onDamage: onEnemyDamage, onEvolution: onEnemyEvolution },
  ] = usePokemon('Hitokage');

  return (
    <div className={battleField}>
      <div className={playerStyle}>
        {playerPokemon && (
          <PokeCard
            {...playerPokemon}
            onClickDamage={() => onEnemyDamage(10)}
            onClickMegaSinka={onPlayerEvolution}
          />
        )}
      </div>

      <div className={enemyStyle}>
        {enemyPokemon && (
          <PokeCard
            {...enemyPokemon}
            onClickDamage={() => onPlayerDamage(10)}
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
