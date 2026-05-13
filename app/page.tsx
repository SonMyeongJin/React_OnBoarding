import { BananaButton } from '@molecules/bananaButton';
import Profile from '../src/components/pokemon/atoms/image';
import Skill from '../src/components/pokemon/atoms/skill';
import Status from '../src/components/pokemon/atoms/status';

function IndexPage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello My page</p>
        <BananaButton />
      </header>
      <Status />
      <Skill name="Pikachu" />
      <Skill name="Hitokage" />
      <Profile isPika={false} />
      <Profile isPika={true} />
    </div>
  );
}

IndexPage.displayName = 'IndexPage';
export default IndexPage;
