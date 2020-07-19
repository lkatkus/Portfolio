import React from 'react';

import { Button, Text } from 'components';

interface SidebarProps {
  openTab: (tab: any) => void;
  config: any[];
  activeTab: any;
}

const Sidebar: React.FC<SidebarProps> = ({ config, openTab, activeTab }) => (
  <React.Fragment>
    {config.map((option) => (
      <Button
        key={option.key}
        onClick={() => {
          option.content ? openTab(option.key) : option.onClick();
        }}
        active={option.key === activeTab}
        padding='5px 10px'
      >
        <Text.Heading2>{option.label}</Text.Heading2>
      </Button>
    ))}
  </React.Fragment>
);
export default Sidebar;
