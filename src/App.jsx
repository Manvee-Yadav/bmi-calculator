import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';
import BMIInfoPage from './pages/BmiInfoPage';
import NutritionPage from './pages/NutritionPage';
import { useEffect } from 'react';
import { useBmiStore } from './store/bmiStore';

function App() {
  const loadHistory = useBmiStore(state => state.loadHistory);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  return (
    <BrowserRouter>
      <header>
        <h1>BMI Calculator</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/bmiInfo">Bmi Info</Link>
          <Link to="/nutrition">Nutrition & Exercise Plans</Link>

        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/bmiInfo" element={<BMIInfoPage/>}/>
        <Route path="/nutrition" element={<NutritionPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
