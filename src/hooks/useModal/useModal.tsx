import React, { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import { Button, Icons } from 'components';

const ModalWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
`;

const ModalContainer = styled(Flex)`
  background-color: white;
  max-height: 90%;
  min-width: 200px;
  max-width: 800px;
  border: 1px solid black;
  -webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.4);
`;

const ModalContentContainer = styled(Flex)`
  overflow-y: auto;
`;

const useModal = (
  content: ReactElement,
  props?: { onClose: () => void }
): any => {
  const [show, setShow] = React.useState(false);

  const modalContent = (
    <ModalWrapper
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <ModalContainer
        p='20px'
        flexDirection='column'
        width={[0.9, 0.7, 'auto']}
      >
        <Flex justifyContent='flex-end' mb='10px'>
          <Button
            onClick={() => {
              setShow(false);
              props?.onClose && props.onClose();
            }}
          >
            <Icons.Close />
          </Button>
        </Flex>
        <ModalContentContainer flexDirection='column'>
          {content}
        </ModalContentContainer>
      </ModalContainer>
    </ModalWrapper>
  );

  return {
    showModal: () => setShow(true),
    hideModal: () => setShow(false),
    Modal: () =>
      show
        ? createPortal(modalContent, document.getElementById('modal-root'))
        : null,
  };
};

export default useModal;
