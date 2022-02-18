import { useNavigate, useParams } from 'react-router-dom';

import { CharacterEditor } from '../../components/CharacterEditor/CharacterEditor';
import { HomePageButton } from '../../components/HomePageButton/HomePageButton';
import { characterActionTypes } from '../../hooks/characterReducer';
import { useCharacter } from '../../hooks/charactersContext';
import { NotFound } from '../NotFound/NotFound';

export const Update = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { character, isLoading, dispatch } = useCharacter(params.characterId);

  if (character === undefined) {
    return <NotFound />;
  }

  if (isLoading) {
    return;
  }

  const saveCharacter = (newCharacter) => {
    dispatch({ type: characterActionTypes.SET, character: newCharacter });
    navigate(`/${character.id}/game`);
  };

  return (
    <div>
      <HomePageButton />
      <CharacterEditor initial={character} onSubmit={saveCharacter} />
    </div>
  );
};
