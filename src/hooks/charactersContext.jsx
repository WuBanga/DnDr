import { createContext, useContext, useEffect, useState } from 'react';

import { characterReducer } from './characterReducer';

const CharactersContext = createContext();
const charactersKey = 'characters';

const CharactersProvider = (props) => {
  const { children } = props;
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

  return (
    <CharactersContext.Provider
      value={{ characters, isLoading, setCharacters }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

const useCharacters = () => {
  const context = useContext(CharactersContext);
  if (context === undefined) {
    throw new Error(
      'useCharacters должен использоваться внутри CharactersProvider'
    );
  }

  const addCharacter = (character) => {
    context.setCharacters((prevState) => [character, ...prevState]);
  };

  const deleteCharacter = (id) => {
    context.setCharacters((prevState) =>
      prevState.filter((character) => character.id !== id)
    );
  };

  return {
    characters: context.characters,
    isLoading: context.isLoading,
    addCharacter,
    deleteCharacter,
  };
};

const useCharacter = (id) => {
  const context = useContext(CharactersContext);
  if (context === undefined) {
    throw new Error(
      'useCharacter должен использоваться внутри CharactersProvider'
    );
  }

  const { characters, isLoading, setCharacters } = context;

  const character = characters.find((character) => character.id === id);
  const dispatch = (action) => {
    setCharacters((prevState) =>
      prevState.map((character) => {
        if (character.id === id) {
          return characterReducer(character, action);
        }
        return character;
      })
    );
  };
  return { character, isLoading, dispatch };
};

export { CharactersProvider, useCharacters, useCharacter };
