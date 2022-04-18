import React from 'react';

import { Button, Text } from 'components';

interface MenuProps {
  openTab: (tab: string) => void;
  config: { key: string; label: string; content: React.FC }[];
}

const Menu: React.FC<MenuProps> = ({ config, openTab }) => (
  <React.Fragment>
    {config.map((option, i) => (
      <Button
        key={option.key}
        p='5px 10px'
        mt={i > 0 ? '15px' : 0}
        onClick={() => openTab(option.key)}
      >
        <Text.Heading2>{option.label}</Text.Heading2>
      </Button>
    ))}
  </React.Fragment>
);
export default Menu;
