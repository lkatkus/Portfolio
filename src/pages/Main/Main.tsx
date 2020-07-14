import React from 'react';

import { GameContainer, PageContainer } from 'containers';

import { About, Contacts, Other, Portfolio } from './atoms';

const Main: React.FC = () => {
  return (
    <PageContainer
      sidebarConfig={[
        { key: 'about', label: 'About' },
        { key: 'portfolio', label: 'Portfolio' },
        { key: 'github', label: 'Github' },
        { key: 'other', label: 'Other' },
        { key: 'contacts', label: 'Contacts' },
      ]}
      contentConfig={[
        { key: 'about', content: About },
        { key: 'portfolio', content: Portfolio },
        { key: 'github', onClick: () => alert('github') },
        { key: 'other', content: Other },
        { key: 'contacts', content: Contacts },
      ]}
    >
      {({ openTab }) => (
        <GameContainer
          onLoadGame={() => console.log('onLoadGame')}
          onOpenTab={openTab}
        />
      )}
    </PageContainer>
  );
};

export default Main;
