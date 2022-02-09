import { Link } from 'react-router-dom';

export const CharacterCard = (props) => {
  const { character } = props;
  if (character === undefined) {
    return (
      <Link to="/create" className="character">
        <p>+</p>
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
        <button className="character__button">Редактировать</button>
      </Link>
      <Link to={`/${character.id}/game`}>
        <button className="character__button">Играть</button>
      </Link>
    </div>
  );
};
