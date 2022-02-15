import { useNavigate } from 'react-router-dom';

import { CharacterEditor } from '../../components/CharacterEditor/CharacterEditor';
import { useCharacters } from '../../hooks/useCharacters';
import { generateId } from '../../utils/generateId';

export const Create = () => {
  const { addCharacter } = useCharacters();
  const navigate = useNavigate();
  const saveCharacter = (character) => {
    const id = generateId();
    character['id'] = id;
    addCharacter(character);
    navigate(`/${character.id}/game`);
  };
  return <CharacterEditor onSubmit={saveCharacter} />;
};
