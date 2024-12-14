import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import Games from './games/Games';
import TresEnRaya from './games/TresEnRaya';
import CombatPokemon from './games/CombatPokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/games/tresenraya" element={<TresEnRaya />}></Route>
        <Route path="/games/combatepokemon" element={<CombatPokemon />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
