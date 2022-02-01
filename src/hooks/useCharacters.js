import { useEffect, useState } from 'react';

const charactersKey = 'characters';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const charactersString = localStorage.getItem(charactersKey);
    if (charactersString) {
      setCharacters(JSON.parse(charactersString));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(charactersKey, JSON.stringify(characters));
  }, [characters]);

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

  return { characters, addCharacter, updateCharacter };
};
