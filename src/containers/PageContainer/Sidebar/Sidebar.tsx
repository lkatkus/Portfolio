import React from 'react';
import styled from 'styled-components';

import { Button, Icons, Text } from 'components';

const SidebarWrapper = styled('div')`
  background-color: white;
  padding: 10px 20px;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

interface SidebarProps {
  openTab: (tab: any) => void;
  closeTab: () => void;
  config: any[];
  activeTab: any;
}

const Sidebar: React.FC<SidebarProps> = ({
  config,
  openTab,
  closeTab,
  activeTab,
}) => {
  const [visible, setVisible] = React.useState<any>(false);

  React.useEffect(() => {
    if (activeTab !== null && !visible) {
      setVisible(true);
    }
  }, [activeTab]);

  return visible ? (
    <SidebarWrapper>
      <ButtonWrapper>
        <Button
          onClick={() => {
            closeTab();
            setVisible(false);
          }}
        >
          <Icons.ArrowLeft />
        </Button>
      </ButtonWrapper>
      {config.map((option) => (
        <Button
          key={option.key}
          onClick={() => {
            option.content ? openTab(option.key) : option.onClick();
          }}
        >
          <Text.Heading>{option.label}</Text.Heading>
        </Button>
      ))}
    </SidebarWrapper>
  ) : (
    <div>
      <Button onClick={() => setVisible(true)}>
        <Icons.Burger />
      </Button>
    </div>
  );
};

export default Sidebar;
