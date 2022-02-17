import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { GithubLink } from './components/GithubLink/GithubLink';
import { CharactersProvider } from './hooks/charactersContext';
import { Create } from './pages/Create/Create';
import { Game } from './pages/Game/Game';
import { Home } from './pages/Home/Home';
import { Update } from './pages/Update/Update';

export const App = () => {
  return (
    <BrowserRouter basename="/DnDr">
      <CharactersProvider>
        <main className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:characterId/update" element={<Update />} />
            <Route path="/:characterId/game" element={<Game />} />
          </Routes>
        </main>
      </CharactersProvider>
      <footer className="footer">
        <GithubLink />
      </footer>
    </BrowserRouter>
  );
};
