import { Link } from 'react-router-dom';

export const NewCharacterCard = () => {
  return (
    <Link to="/create" className="character-card">
      <p className="character-card__plus">+</p>
    </Link>
  );
};
