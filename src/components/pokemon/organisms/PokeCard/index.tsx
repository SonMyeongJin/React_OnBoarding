import type { ComponentProps } from 'react';
import Image from '../../atoms/image';
import MegaButton from '../../atoms/megaButton';
import Skill from '../../atoms/skill';
import Status from '../../atoms/status';

type PokeCardProps = ComponentProps<typeof Image> &
  ComponentProps<typeof Status> &
  ComponentProps<typeof Skill> &
  ComponentProps<typeof MegaButton>;

function PokeCard(props: PokeCardProps) {
  return (
    <div className="hito-card">
      <Image {...props} />
      <Status {...props} />
      <Skill {...props} />
      <MegaButton {...props} />
    </div>
  );
}

export default PokeCard;
