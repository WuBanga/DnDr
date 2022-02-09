import { useEffect, useReducer, useState } from 'react';

import { characterActionTypes, characterReducer } from './characterReducer';
import { charactersKey } from './useCharacters';

export { characterActionTypes };

export const useCharacter = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, dispatch] = useReducer(characterReducer, undefined);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    const characters = JSON.parse(localStorage.getItem(charactersKey)).map(
      (item) => {
        if (item.id === character.id) {
          return character;
        }
        return item;
      }
    );
    localStorage.setItem(charactersKey, JSON.stringify(characters));
  }, [character, isLoading]);

  useEffect(() => {
    const currentCharacter = JSON.parse(
      localStorage.getItem(charactersKey)
    ).find((character) => character.id === id);
    dispatch({ type: characterActionTypes.SET, character: currentCharacter });
    setIsLoading(false);
  }, [id]);

  return { character, isLoading, dispatch };
};
