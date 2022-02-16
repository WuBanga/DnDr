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
    setCharacter(characters.concat(character));
    setCharacters((prevState) => [...prevState, character]);
  };

  const deleteCharacter = (character) => {
    setCharacter(characters.filter((item) => item.id !== character.id));
    setCharacters((prevState) =>
      prevState.filter((item) => item.id !== character.id)
    );
  };

  const setCharacter = (data) => {
    localStorage.setItem(charactersKey, JSON.stringify(data));
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
    deleteCharacter,
    getCharacter,
  };
};
