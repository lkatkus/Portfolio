import React from 'react';
import styled from 'styled-components';

import { Button, Icons, Grid } from 'components';
import { getPixelBorder } from 'utils/style';

const ModalWrapper = styled(Grid.Container)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 99;
`;

const ModalContainer = styled(Grid.Container)`
  background-color: white;
  max-height: 90%;
  max-width: 1000px;
  position: relative;

  ${getPixelBorder('black')}
`;

const ModalContentContainer = styled(Grid.Container)`
  overflow-y: auto;
`;

interface ModalProps {
  closeModal: () => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, closeModal, onClose }) => (
  <ModalWrapper
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
  >
    <ModalContainer
      p='40px'
      flexDirection='column'
      width={[0.9, 0.8, 0.6, 'auto']}
    >
      <Grid.Container justifyContent='flex-end'>
        <Grid.Box position='absolute' top={'8px'} right={'8px'}>
          <Button
            p={'5px'}
            variant='icon'
            onClick={() => {
              closeModal();
              onClose && onClose();
            }}
          >
            <Icons.Close size={16} />
          </Button>
        </Grid.Box>
      </Grid.Container>
      <ModalContentContainer flexDirection='column'>
        {children}
      </ModalContentContainer>
    </ModalContainer>
  </ModalWrapper>
);

export default Modal;
