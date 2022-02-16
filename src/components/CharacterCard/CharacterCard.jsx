import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';
import './CharacterCard.css';

export const CharacterCard = (props) => {
  const { character, onOpenModal } = props;

  const openDeleteModal = (character) => {
    onOpenModal(character);
  };

  if (character === undefined) {
    return (
      <Link to="/create" className="character">
        <p className="character__plus">+</p>
      </Link>
    );
  }

  return (
    <div className="character">
      <div className="character__info">
        <h1 className="character__name">{character.name}</h1>
        <p className="character__text">{character.race}</p>
        <p className="character__text">{character.class}</p>
      </div>
      <div className="character__buttons">
        <Link
          className="button character__button"
          to={`/${character.id}/update`}
        >
          Редактировать
        </Link>
        <Link className="button character__button" to={`/${character.id}/game`}>
          Играть
        </Link>
        <Button
          className="character__button button--attention-button"
          onClick={(e) => openDeleteModal(character)}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};
