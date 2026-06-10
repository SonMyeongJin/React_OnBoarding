import type { ComponentProps, FC } from 'react';
import Image from '../../atoms/image';
import Status from '../../atoms/status';
import type { AnimationType } from '../../entities/pokemon/model/type';
import {
  burnedAnimation,
  fireAnimation,
  noPokeCardStyle,
  paralysisAnimation,
  pokeCardStyle,
  tailAnimation,
} from './index.css';

type PokeCardProps = ComponentProps<typeof Image> &
  ComponentProps<typeof Status> & {
    // onClickMegaSinka: () => void;
    isSkillsActive: boolean;
    Animation: AnimationType;
  };

const PokeCard: FC<PokeCardProps> = (props: PokeCardProps) => {
  return (
    <div className={props.isSkillsActive ? pokeCardStyle : noPokeCardStyle}>
      {props.Animation === 'fire' && <div className={fireAnimation} />}
      {props.Animation === 'tail' && <div className={tailAnimation} />}
      {props.Animation === 'burned' && <div className={burnedAnimation} />}
      {props.Animation === 'paralysis' && <div className={paralysisAnimation} />}

      <Image imageUrl={props.imageUrl} isDead={props.isDead} pokeName={props.pokeName} />
      {props.isDead && <div> Game Over </div>}

      <Status {...props} />

      {/*<MegaButton onClick={props.onClickMegaSinka} />*/}
    </div>
  );
};

export default PokeCard;
