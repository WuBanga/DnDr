import { useParams } from 'react-router-dom';

import { CharacterEditor } from '../../components/CharacterEditor/CharacterEditor';
import { useCharacters } from '../../hooks/useCharacters';

export const Update = () => {
  const params = useParams();
  const { updateCharacter, getCharacter } = useCharacters();
  const saveCharacter = (character) => {
    const id = character.id;
    updateCharacter(character);
  };
  const character = getCharacter(params.characterId);
  return <CharacterEditor initial={character} onSubmit={saveCharacter} />;
};
