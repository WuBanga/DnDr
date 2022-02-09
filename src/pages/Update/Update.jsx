import { useParams } from 'react-router-dom';

import { useCharacters } from '../../hooks/useCharacters';
import { CharacterEditor } from '../CharacterEditor/CharacterEditor';

export const Update = () => {
  const params = useParams();
  const { updateCharacter, getCharacter } = useCharacters();
  const character = getCharacter(params.characterId);
  return <CharacterEditor initial={character} onSubmit={updateCharacter} />;
};
