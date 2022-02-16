import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { NewCharacterCard } from '../../components/NewCharacterCard/NewCharacterCard';
import { useCharacters } from '../../hooks/useCharacters';
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
          onDelete={deleteCharacter}
        />
      ))}
      <NewCharacterCard />
    </div>
  );
};
