import { BananaButton } from '@molecules/bananaButton';
import type { FC } from 'react';
import { memo } from 'react';
import { Profile } from '../src/components/pokemon/image';
import { Skill } from '../src/components/pokemon/skill';
import { Status } from '../src/components/pokemon/status';

const IndexPage: FC = memo(() => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello My page</p>
        <BananaButton />
      </header>
      <Status />
      <Skill />
      <Profile />
    </div>
  );
});
IndexPage.displayName = 'IndexPage';

export default IndexPage;
