import Profile from '../../atoms/image';
import Skill from '../../atoms/skill';
import Status from '../../atoms/status';

function HitoCard() {
  return (
    <div className="hito-card">
      <Profile isPika={false} />
      <Status />
      <Skill name="Hitokage" />
    </div>
  );
}

export default HitoCard;
