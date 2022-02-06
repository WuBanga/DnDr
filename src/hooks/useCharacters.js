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

  const addCharacter = (character) => {
    setCharacters((prevState) => [...prevState, character]);
  };

  const updateCharacter = (index, newCharacter) => {
    setCharacters((prevState) =>
      prevState
        .slice(0, index)
        .concat(newCharacter)
        .concat(prevState.slice(index + 1))
    );
  };

  const getCharacter = (name) => {
    return characters.filter((character) => character.name === name)[0];
  };

  return {
    characters,
    isLoading,
    addCharacter,
    updateCharacter,
    getCharacter,
  };
};
