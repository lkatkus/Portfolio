import React from 'react';

import { GameContainer, PageContainer } from 'containers';

import { About } from './atoms';

const Main: React.FC = () => {
  return (
    <PageContainer config={[{ key: 'about', label: 'About', content: About }]}>
      {({ openTab }) => <GameContainer onOpenTab={openTab} />}
    </PageContainer>
  );
};
export default Main;
