import { Button } from '../Button/Button';
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
          <Button type="button" onClick={onClose}>
            x
          </Button>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};
