import type { ComponentProps, FC } from 'react';
import Image from '../../atoms/image';
import MegaButton from '../../atoms/megaButton';
import Status from '../../atoms/status';
import Skills from '../../molecules/skills';
import { pokeCardStyle, skillsStyle } from './index.css';

type PokeCardProps = ComponentProps<typeof Image> &
  ComponentProps<typeof Status> &
  ComponentProps<typeof Skills> & {
    onClickMegaSinka: () => void;
    isSkillsActive: boolean;
  };

const PokeCard: FC<PokeCardProps> = (props: PokeCardProps) => {
  return (
    <div className={pokeCardStyle}>
      <Image
        imageUrl={props.imageUrl}
        isDead={props.isDead}
        pokeName={props.pokeName}
      />

      <Status {...props} />

      <div className={skillsStyle}>
        {props.isSkillsActive && <Skills {...props} />}
      </div>

      <MegaButton onClick={props.onClickMegaSinka} />
    </div>
  );
};

export default PokeCard;
