import PokeCard from '../../molecules/PokeCard';

function BattleFeild() {
  return (
    <div>
      <PokeCard isPika={true} skill="Pikachu" />
      <PokeCard isPika={false} skill="Hitokage" />
    </div>
  );
}

export default BattleFeild;
