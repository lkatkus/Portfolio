import React from 'react';

import { GameContainer, PageContainer } from 'containers';

import { About, Profile, Contacts, Skills, Other, Options } from './atoms';

interface IOptions {
  audio: { music: { on: boolean }; sfx: { on: boolean } };
}

const Main: React.FC = () => {
  const [gameOptions, setGameOptions] = React.useState<IOptions>({
    audio: { music: { on: true }, sfx: { on: true } },
  });

  return (
    <PageContainer
      menuConfig={[
        { key: 'profile', label: 'Profile', content: Profile },
        { key: 'skills', label: 'Skills', content: Skills },
        { key: 'other', label: 'Other', content: Other },
        { key: 'contacts', label: 'Contacts', content: Contacts },
        {
          key: 'options',
          label: 'Options',
          content: Options,
          props: {
            options: gameOptions,
            onOptionsChange: setGameOptions,
          },
        },
        { key: 'about', label: 'About', content: About },
      ]}
    >
      {({ openTab }) => (
        <GameContainer onOpenTab={openTab} options={gameOptions} />
      )}
    </PageContainer>
  );
};
export default Main;
