import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { CreatePage } from './pages/Create/CreatePage';
import { GamePage } from './pages/Game/GamePage';
import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/:characterName/game" element={<GamePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
