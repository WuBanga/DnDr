import { useEffect, useState } from 'react';

export const charactersKey = 'characters';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const charactersString = localStorage.getItem(charactersKey);
      if (charactersString) {
        setCharacters(JSON.parse(charactersString));
      }
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(charactersKey, JSON.stringify(characters));
    }
  }, [characters, isLoading]);

  const addCharacter = (id, character) => {
    character['id'] = id;
    setCharacters((prevState) => [...prevState, character]);
  };

  const updateCharacter = (id, newCharacter) => {
    setCharacters((prevState) =>
      prevState.filter((character) => character.id !== id).concat(newCharacter)
    );
  };

  const getCharacter = (id) => {
    return JSON.parse(localStorage.getItem(charactersKey)).find(
      (character) => character.id === id
    );
  };

  return {
    characters,
    isLoading,
    addCharacter,
    updateCharacter,
    getCharacter,
  };
};
