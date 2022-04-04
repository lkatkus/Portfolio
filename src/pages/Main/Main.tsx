import React from 'react';

import { GameContainer, PageContainer } from 'containers';

import { About, Profile, Contacts, Skills, Other } from './atoms';

const Main: React.FC = () => {
  return (
    <PageContainer
      menuConfig={[
        { key: 'profile', label: 'Profile', content: Profile },
        { key: 'skills', label: 'Skills', content: Skills },
        { key: 'other', label: 'Other', content: Other },
        { key: 'contacts', label: 'Contacts', content: Contacts },
        { key: 'about', label: 'About', content: About },
      ]}
    >
      {({ openTab }) => <GameContainer onOpenTab={openTab} />}
    </PageContainer>
  );
};
export default Main;
