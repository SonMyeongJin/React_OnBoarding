import type { ComponentProps, FC } from 'react';
import Image from '../../atoms/image';
import MegaButton from '../../atoms/megaButton';
import Status from '../../atoms/status';
import type { AnimationType } from '../../entities/pokemon/model/type';
import Skills from '../../molecules/skills';
import {
  burnedAnimation,
  fireAnimation,
  noPokeCardStyle,
  noSkillsStyle,
  paralysisAnimation,
  pokeCardStyle,
  skillsStyle,
  tailAnimation,
} from './index.css';

type PokeCardProps = ComponentProps<typeof Image> &
  ComponentProps<typeof Status> &
  ComponentProps<typeof Skills> & {
    onClickMegaSinka: () => void;
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

      <Status {...props} />

      <div className={props.isSkillsActive ? skillsStyle : noSkillsStyle}>
        <Skills {...props} />
      </div>
      {/*<div className={noSkillsStyle}>{!props.isSkillsActive && <Skills {...props} />}</div>*/}
      {/*<div className={skillsStyle}>{props.isSkillsActive && <Skills {...props} />}</div>*/}

      <MegaButton onClick={props.onClickMegaSinka} />
    </div>
  );
};

export default PokeCard;
