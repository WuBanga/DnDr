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
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  return <CharacterEditor onSubmit={saveCharacter} />;
};
