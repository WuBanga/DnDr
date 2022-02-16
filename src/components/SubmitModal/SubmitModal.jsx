import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import './SubmitModal.css';

export const SubmitModal = (props) => {
  const {
    title,
    text,
    submitText,
    cancelText,
    isOpen,
    onClose,
    onSubmit,
    onCancel,
  } = props;

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <div className="submit-modal">
        <p className="submit-modal__text">{text}</p>
        <div className="submit-modal__buttons">
          <Button color="red" onClick={onSubmit}>
            {submitText}
          </Button>
          <Button onClick={onCancel}>{cancelText}</Button>
        </div>
      </div>
    </Modal>
  );
};
