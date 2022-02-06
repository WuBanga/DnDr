import { useState, useEffect, useReducer } from 'react';
import { charactersKey } from './useCharacters';
import { characterReducer, characterActionTypes } from './characterReducer';

export { characterActionTypes };

export const useCharacter = (name) => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, dispatch] = useReducer(characterReducer, undefined);

  useEffect(() => {
    const currentCharacter = JSON.parse(
      localStorage.getItem(charactersKey)
    ).find((character) => character.name === name);
    dispatch({ type: characterActionTypes.SET, character: currentCharacter });
    setIsLoading(false);
  }, [name]);

  return { character, isLoading, dispatch };
};
