import { Link } from 'react-router-dom';

import { useState } from 'react';

import { Button } from '../Button/Button';
import { SubmitModal } from '../SubmitModal/SubmitModal';
import './CharacterCard.css';

export const CharacterCard = (props) => {
  const { character, onDelete } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteCharacter = (id) => {
    onDelete(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  if (character === undefined) {
    return (
      <Link to="/create" className="character-card">
        <p className="character-card__plus">+</p>
      </Link>
    );
  }

  return (
    <div className="character-card">
      <SubmitModal
        title="Удаление персонажа"
        text={`Вы точно хотите удалить персонажа ${character.name}?`}
        submitText="Удалить"
        cancelText="Отмена"
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={() => deleteCharacter(character.id)}
        onCancel={closeModal}
      />
      <div className="character-card__info">
        <h1 className="character-card__name">{character.name}</h1>
        <p className="character-card__text">{character.race}</p>
        <p className="character-card__text">{character.class}</p>
      </div>
      <div className="character-card__buttons">
        <Button
          className="character-card__button"
          as={Link}
          to={`/${character.id}/update`}
        >
          Редактировать
        </Button>
        <Button
          className="character-card__button"
          as={Link}
          to={`/${character.id}/game`}
        >
          Играть
        </Button>
        <Button
          className="character-card__button"
          color="red"
          onClick={openModal}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};
