import React from 'react';
import styled from 'styled-components';

import { Button, Icons } from 'components';
import { useModal } from 'hooks';

import { Sidebar } from './Sidebar';
import { Content } from './Content';

const StyledPageContainer = styled('div')`
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
`;

const ChildrenContainer = styled('div')`
  width: 100%;
  height: 100%;
`;

interface PageWrapperProps {
  children: any;
  menuConfig: any[];
}

const Menu: React.FC<any> = ({ children, config }) => {
  const [activeTab, setActiveTab] = React.useState<any>(null);

  const {
    showModal: showMenu,
    hideModal: hideMenu,
    Modal: MenuModal,
  } = useModal(
    <Sidebar
      openTab={(tab) => setActiveTab(tab)}
      config={config}
      activeTab={activeTab}
    />
  );
  const {
    showModal: showContent,
    hideModal: hideContent,
    Modal: ContentModal,
  } = useModal(
    <Content
      config={config}
      activeTab={activeTab}
      closeTab={() => setActiveTab(null)}
    />,
    {
      onClose: () => setActiveTab(null),
    }
  );

  React.useEffect(() => {
    if (activeTab) {
      hideMenu();
      showContent();
    } else if (!activeTab) {
      hideMenu();
      hideContent();
    }
  }, [activeTab]);

  return (
    <React.Fragment>
      <ButtonWrapper>
        <Button onClick={showMenu} p='5px'>
          <Icons.Burger />
        </Button>
      </ButtonWrapper>

      <MenuModal />
      <ContentModal />

      {children({
        openTab: setActiveTab,
      })}
    </React.Fragment>
  );
};

const PageContainer: React.FC<PageWrapperProps> = ({
  children,
  menuConfig,
}) => (
  <StyledPageContainer>
    <Menu config={menuConfig}>
      {({ openTab }) => (
        <ChildrenContainer>{children({ openTab: openTab })}</ChildrenContainer>
      )}
    </Menu>
  </StyledPageContainer>
);
export default PageContainer;
