import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import PageGame from './pages/PageGame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/juego" element={<PageGame />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
