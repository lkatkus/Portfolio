import React from 'react';
import styled from 'styled-components';

import { Button, Icons } from 'components';
import { useModal } from 'hooks';

import { Menu } from './Menu';
import { Modal } from './Modal';
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

const PageContainer: React.FC<PageWrapperProps> = ({
  children,
  menuConfig,
}) => {
  const [activeTab, setActiveTab] = React.useState<any>(null);

  const { showModal: showMenu, Modal: MenuModal } = useModal(
    <Menu
      openTab={(tab) => setActiveTab(tab)}
      config={menuConfig}
      activeTab={activeTab}
    />,
    {
      component: Modal,
    }
  );

  const {
    showModal: showContent,
    hideModal: hideContent,
    Modal: ContentModal,
  } = useModal(<Content config={menuConfig} activeTab={activeTab} />, {
    component: Modal,
    onClose: () => setActiveTab(null),
  });

  React.useEffect(() => {
    if (activeTab) {
      showContent();
    } else if (!activeTab) {
      hideContent();
    }
  }, [activeTab]);

  return (
    <StyledPageContainer>
      <ButtonWrapper>
        <Button onClick={showMenu} p='5px'>
          <Icons.Burger />
        </Button>
      </ButtonWrapper>

      <MenuModal />
      <ContentModal />

      <ChildrenContainer>
        {children({
          openTab: setActiveTab,
        })}
      </ChildrenContainer>
    </StyledPageContainer>
  );
};

export default PageContainer;
