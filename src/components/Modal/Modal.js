import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal(props) {
  const { onToggleModal, children, showModal } = props;
  const history = useHistory();

  console.log('history', history);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onToggleModal();
      }
    };

    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggleModal, showModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

  const { Overlay, Modal } = s;

  return createPortal(
    <div className={Overlay} onClick={handleBackdropClick}>
      <div className={Modal}>{children}</div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
};

export default Modal;
