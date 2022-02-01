import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { CreatePage } from './pages/Create/CreatePage';
import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
