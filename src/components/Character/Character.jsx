import './Character.css';
import { Link } from 'react-router-dom';

export const Character = (props) => {
  const { character } = props;
  return (
    <div className="character">
      <div className="character__info">
        <h1 className="character__name">{character.name}</h1>
        <p className="character__text">{character.race}</p>
        <p className="character__text">{character.class}</p>
      </div>
      <Link to={`/${character.name}/game`}>
        <button className="character__button">Играть</button>
      </Link>
    </div>
  );
};
