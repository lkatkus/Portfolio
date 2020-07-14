import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled('div')`
  background-color: red;
`;

const SidebarOption = styled('div')`
  padding: 10px;
`;

interface SidebarProps {
  openTab: (tab: string) => void;
  config: any[];
}

const Sidebar: React.FC<SidebarProps> = ({ config, openTab }) => {
  return (
    <SidebarWrapper>
      {config.map((option) => (
        <SidebarOption key={option.key} onClick={() => openTab(option.key)}>
          {option.label}
        </SidebarOption>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
