import { useNavigate } from 'react-router-dom';

import { CharacterEditor } from '../../components/CharacterEditor/CharacterEditor';
import { HomePageButton } from '../../components/HomePageButton/HomePageButton';
import { useCharacters } from '../../hooks/charactersContext';
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
  return (
    <div>
      <HomePageButton />
      <CharacterEditor onSubmit={saveCharacter} />
    </div>
  );
};
