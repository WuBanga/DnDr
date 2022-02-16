import { useState } from 'react';

import { Button } from '../../components/Button/Button';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { Modal } from '../../components/Modal/Modal';
import { useCharacters } from '../../hooks/useCharacters';
import './Home.css';

export const Home = () => {
  const { characters, isLoading, deleteCharacter } = useCharacters();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [characterToDelete, setCharacterToDelete] = useState({});

  const closeModal = () => {
    setIsModalOpen(false);
    setCharacterToDelete({});
  };

  const openModal = (character) => {
    setIsModalOpen(true);
    setCharacterToDelete(character);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="delete-modal">
          <p className="delete-modal__text">{`Вы точно хотите удалить персонажа: ${characterToDelete.name}?`}</p>
          <div className="delete-modal__buttons">
            <Button
              className="button--attention-button"
              onClick={(e) => deleteCharacter(characterToDelete)}
            >
              Удалить
            </Button>
            <Button onClick={closeModal}>Отмена</Button>
          </div>
        </div>
      </Modal>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onOpenModal={openModal}
        />
      ))}
      <CharacterCard />
    </div>
  );
};
