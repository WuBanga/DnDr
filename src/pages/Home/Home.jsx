import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { NewCharacterCard } from '../../components/CharacterCard/NewCharacterCard';
import { useCharacters } from '../../hooks/charactersContext';
import './Home.css';

export const Home = () => {
  const { characters, isLoading, deleteCharacter } = useCharacters();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onDelete={() => deleteCharacter(character.id)}
        />
      ))}
      <NewCharacterCard />
    </div>
  );
};
