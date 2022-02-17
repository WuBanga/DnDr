import { createPortal } from 'react-dom';

import { CloseIcon } from '../../icons/CloseIcon';
import { IconButton } from '../IconButton/IconButton';
import './Modal.css';

export const Modal = (props) => {
  // Закрытие на esc

  // На будущее залочить фокус на модалке, чтобы не работал tab наружу
  const { title, isOpen, onClose, children } = props;

  // useEffect(() => {
  //   const escapeEvent = (e) => {
  //     if (e.key === 'Escape') {
  //       onClose();
  //     }
  //   };
  //   if (isOpen) {
  //     document.addEventListener('keypress', escapeEvent);
  //   }
  //   return () => {
  //     document.removeEventListener('keypress', escapeEvent);
  //   };
  // }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h1>{title}</h1>
          <IconButton icon={<CloseIcon />} onClick={onClose} />
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>,
    document.body
  );
};
