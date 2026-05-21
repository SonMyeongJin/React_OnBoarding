import type { ComponentProps, FC } from 'react';
import Image from '../../atoms/image';
import MegaButton from '../../atoms/megaButton';
import Skill from '../../atoms/skill';
import Status from '../../atoms/status';

type PokeCardProps = ComponentProps<typeof Image> &
  ComponentProps<typeof Status> &
  Omit<ComponentProps<typeof Skill>, 'onClick'> & {
    onClickMegaSinka: () => void;
    onClickDamage: () => void;
  };

const PokeCard: FC<PokeCardProps> = (props: PokeCardProps) => {
  return (
    <div className="poke-card">
      <Image {...props} />
      <Status {...props} />
      <Skill {...props} onClick={props.onClickDamage} />
      <MegaButton onClick={props.onClickMegaSinka} />
    </div>
  );
};

export default PokeCard;
