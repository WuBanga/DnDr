import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';
import './CharacterCard.css';

export const CharacterCard = (props) => {
  const { character } = props;
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
      <Link to={`/${character.id}/update`}>
        <Button>Редактировать</Button>
      </Link>
      <Link to={`/${character.id}/game`}>
        <Button>Играть</Button>
      </Link>
    </div>
  );
};
