import { useState, useRef, useEffect, ReactElement } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactElement;
}

function Modal({ isOpen, setIsOpen, children}: ModalProps) {
  const [state, setState] = useState({
    modalStatus: isOpen
  }) 

  const prevProps = useRef<boolean>();

  useEffect(() => {
    prevProps.current = state.modalStatus;
  })


  const openPrevProps = prevProps.current ?? state.modalStatus;

  useEffect(() => {
    if (openPrevProps !== isOpen) {
      console.log(openPrevProps)
      setState({ modalStatus: isOpen })
    }
  }, [openPrevProps, isOpen])

  

    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={state.modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
};

export default Modal;
