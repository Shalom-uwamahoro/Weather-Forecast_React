import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Weather from './components/Weather';
import Search from './components/Search';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast App</h1>
      </header>
      <main>
        <Search />
        <Routes>
          <Route path="/" element={<Weather Navigate to="/Nairobi" />} />
          <Route path="/:location" element={<Weather />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;