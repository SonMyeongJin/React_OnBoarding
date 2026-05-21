import type { ComponentProps, FC } from 'react';
import Image from '../../atoms/image';
import MegaButton from '../../atoms/megaButton';
import Skill from '../../atoms/skill';
import Status from '../../atoms/status';
import { pokeCardStyle } from './index.css';

type PokeCardProps = Omit<ComponentProps<typeof Image>, 'isDead'> &
  ComponentProps<typeof Status> &
  Omit<ComponentProps<typeof Skill>, 'onClick'> & {
    onClickMegaSinka: () => void;
    onClickDamage: () => void;
  };

const PokeCard: FC<PokeCardProps> = (props: PokeCardProps) => {
  const isDead: boolean = props.hp <= 0;

  return (
    <div className={pokeCardStyle}>
      <Image
        imageUrl={props.imageUrl}
        isDead={isDead}
        pokeName={props.pokeName}
      />
      <Status {...props} />
      <Skill {...props} onClick={props.onClickDamage} />
      <MegaButton onClick={props.onClickMegaSinka} />
    </div>
  );
};

export default PokeCard;
