import { Link } from 'react-router-dom';

import { PlusIcon } from '../../icons/PlusIcon';
import './CharacterCard.css';

export const NewCharacterCard = () => {
  return (
    <Link to="/create" className="character-card">
      <div className="character-card__plus">
        <PlusIcon />
      </div>
    </Link>
  );
};
