import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './modules/Home/Homepage';
import Materiel from "./modules/Materiel/Materiel";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/materiel" element={<Materiel />} />
      </Routes>
    </Router>
  );
}

export default App;
