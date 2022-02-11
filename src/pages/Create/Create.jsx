import { CharacterEditor } from '../../components/CharacterEditor/CharacterEditor';
import { useCharacters } from '../../hooks/useCharacters';
import { generateId } from '../../utils/generateId';

export const Create = () => {
  const { addCharacter } = useCharacters();
  const saveCharacter = (character) => {
    const id = generateId();
    character['id'] = id;
    addCharacter(character);
  };
  return <CharacterEditor onSubmit={saveCharacter} />;
};
