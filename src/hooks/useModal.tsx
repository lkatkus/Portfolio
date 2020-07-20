import React from 'react';
import { createPortal } from 'react-dom';

interface OptionsProps {
  component: any;
  onClose?: () => void;
}

interface ReturnProps {
  showModal: () => void;
  hideModal: () => void;
  Modal: () => JSX.Element;
}

const useModal = (
  content: JSX.Element,
  options?: OptionsProps
): ReturnProps => {
  const [show, setShow] = React.useState(false);

  const ModalComponent = options.component;
  const modalContent = (
    <ModalComponent
      closeModal={() => setShow(false)}
      onClose={options?.onClose}
    >
      {content}
    </ModalComponent>
  );

  return {
    showModal: () => setShow(true),
    hideModal: () => setShow(false),
    Modal: () => {
      return show
        ? createPortal(modalContent, document.getElementById('modal-root'))
        : null;
    },
  };
};

export default useModal;
