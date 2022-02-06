import { useEffect } from 'react';
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h1>{title}</h1>
          <button type="button" onClick={onClose}>
            x
          </button>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};
