import React from 'react';

import { GameContainer, PageContainer } from 'containers';

import { About, Contacts, Skills, Other } from './atoms';

const Main: React.FC = () => {
  return (
    <PageContainer
      menuConfig={[
        { key: 'about', label: 'About me', content: About },
        { key: 'skills', label: 'Skills', content: Skills },
        { key: 'other', label: 'Other', content: Other },
        { key: 'contacts', label: 'Contacts', content: Contacts },
      ]}
    >
      {({ openTab }) => <GameContainer onOpenTab={openTab} />}
    </PageContainer>
  );
};
export default Main;
