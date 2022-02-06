import { Character } from '../../components/Character/Character';
import { NewCharacter } from '../../components/NewCharacter/NewCharacter';
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
        <Character key={character.name} character={character} />
      ))}
      <NewCharacter />
    </div>
  );
};
