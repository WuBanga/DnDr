import { useCharacters } from '../../hooks/useCharacters';
import { CharacterEditor } from '../CharacterEditor/CharacterEditor';

export const Create = () => {
  const { addCharacter } = useCharacters();
  return <CharacterEditor onSubmit={addCharacter} />;
};
