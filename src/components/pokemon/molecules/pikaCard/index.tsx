import Profile from '../../atoms/image';
import Skill from '../../atoms/skill';
import Status from '../../atoms/status';

function PikaCard() {
  return (
    <div className="pika-card">
      <Profile isPika={true} />
      <Status />
      <Skill name="Pikachu" />
    </div>
  );
}

export default PikaCard;
