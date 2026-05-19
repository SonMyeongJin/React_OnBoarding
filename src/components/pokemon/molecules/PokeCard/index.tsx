import Profile from '../../atoms/image/index';
import MegaButton from '../../atoms/megaButton';
import Skill from '../../atoms/skill';
import Status from '../../atoms/status';

type PokeCardProps = {
    pokeIndex: number;
    isMega: boolean;
};

function PokeCard({pokeIndex, isMega}: PokeCardProps) {
    return (
        <div className="hito-card">
            <Profile pokeIndex={pokeIndex}/>
            <Status pokeIndex={pokeIndex}/>
            <Skill pokeIndex={pokeIndex}/>
            <MegaButton isMega={isMega}/>
        </div>
    );
}

export default PokeCard;
