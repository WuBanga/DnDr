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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (character === undefined) {
    return <NotFound />;
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
