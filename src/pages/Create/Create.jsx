import { CharacterEditor } from '../../components/CharacterEditor/CharacterEditor';
import { useCharacters } from '../../hooks/useCharacters';

export const Create = () => {
  const { addCharacter } = useCharacters();
  return <CharacterEditor onSubmit={addCharacter} />;
};
