import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { useCharacters } from '../../hooks/useCharacters';
import './Home.css';

export const Home = () => {
  const { characters, isLoading } = useCharacters();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
      <CharacterCard />
    </div>
  );
};
