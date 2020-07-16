import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled('div')`
  background-color: red;
  z-index: 10;
`;

const SidebarOption = styled('div')`
  padding: 10px;
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
      <SidebarOption
        onClick={() => {
          closeTab();
          setVisible(false);
        }}
      >
        Close
      </SidebarOption>
      {config.map((option) => (
        <SidebarOption
          key={option.key}
          onClick={() => {
            option.content ? openTab(option.key) : option.onClick();
          }}
        >
          {option.label}
        </SidebarOption>
      ))}
    </SidebarWrapper>
  ) : (
    <div onClick={() => setVisible(true)}>Open</div>
  );
};

export default Sidebar;
