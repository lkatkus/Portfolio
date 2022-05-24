import React from 'react';
import styled from 'styled-components';
import { position, PositionProps } from 'styled-system';

import { Button, Icons } from 'components';
import { useModal } from 'hooks';

import { Menu } from './Menu';
import { Modal } from './Modal';
import { Content } from './Content';

const StyledPageContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ButtonWrapper = styled('div')<PositionProps>`
  position: absolute;
  top: 0;
  margin: 10px;

  ${position}
`;

interface PageWrapperProps {
  isSoundOn: boolean;
  handleSoundToggle: () => void;
  children: (props: { openTab: (tab: string) => void }) => JSX.Element;
  menuConfig: { key: string; label: string; content: React.FC; props?: any }[];
}

const PageContainer: React.FC<PageWrapperProps> = ({
  children,
  menuConfig,
  isSoundOn,
  handleSoundToggle,
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
      <ButtonWrapper left={0}>
        <Button onClick={showMenu} p='10px' variant='icon'>
          <Icons.Burger size={24} />
        </Button>
      </ButtonWrapper>

      <ButtonWrapper right={0}>
        <Button onClick={handleSoundToggle} p='10px' variant='icon'>
          {isSoundOn ? (
            <Icons.SoundOn size={24} />
          ) : (
            <Icons.SoundOff size={24} />
          )}
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
