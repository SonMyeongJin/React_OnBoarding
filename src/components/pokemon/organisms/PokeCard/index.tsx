import type { ComponentProps, FC } from 'react';
import Image from '../../atoms/image';
import MegaButton from '../../atoms/megaButton';
import Status from '../../atoms/status';
import Skills from '../../molecules/skills';
import { pokeCardStyle } from './index.css';

type PokeCardProps = Omit<ComponentProps<typeof Image>, 'isDead'> &
  ComponentProps<typeof Status> &
  Omit<ComponentProps<typeof Skills>, 'onClick'> & {
    // onClick 제외
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
      <Skills {...props} onClick={props.onClickDamage} />
      <MegaButton onClick={props.onClickMegaSinka} />
    </div>
  );
};

export default PokeCard;
