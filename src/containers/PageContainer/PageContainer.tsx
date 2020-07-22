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

interface PageWrapperProps {
  children: (props: { openTab: (tab: string) => void }) => JSX.Element;
  menuConfig: { key: string; label: string; content: React.FC }[];
}

const PageContainer: React.FC<PageWrapperProps> = ({
  children,
  menuConfig,
}) => {
  const [activeTab, setActiveTab] = React.useState<string>(null);

  const { showModal: showMenu, Modal: MenuModal } = useModal(
    <Menu config={menuConfig} openTab={(tab) => setActiveTab(tab)} />,
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
        <Button onClick={showMenu} p='5px' variant='icon'>
          <Icons.Burger />
        </Button>
      </ButtonWrapper>

      <MenuModal />
      <ContentModal />

      <StyledPageContainer>
        {children({
          openTab: setActiveTab,
        })}
      </StyledPageContainer>
    </StyledPageContainer>
  );
};

export default PageContainer;
