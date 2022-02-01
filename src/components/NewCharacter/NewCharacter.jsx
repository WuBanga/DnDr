import './NewCharacter.css';
import { Link } from 'react-router-dom';

export const NewCharacter = () => {
  return (
    <Link to="/create" className="character">
      <p className="new-character__text">+</p>
    </Link>
  );
};
