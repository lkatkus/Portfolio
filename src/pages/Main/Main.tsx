import React from 'react';

import { GameContainer, PageContainer } from 'containers';

import { About, Contacts, Other, Portfolio } from './atoms';

const Main: React.FC = () => {
  return (
    <PageContainer
      config={[
        { key: 'about', label: 'About', content: About },
        { key: 'portfolio', label: 'Portfolio', content: Portfolio },
        { key: 'github', onClick: () => alert('github'), label: 'Github' },
        { key: 'other', label: 'Other', content: Other },
        { key: 'contacts', label: 'Contacts', content: Contacts },
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
