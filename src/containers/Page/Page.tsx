import * as React from 'react';

import { Game } from 'components';

const Page: React.FC = () => {
  return <Game onLoadGame={() => console.log('Game loaded')} />;
};

export default Page;
