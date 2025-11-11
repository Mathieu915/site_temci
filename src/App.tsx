import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './modules/Home/Homepage';
import Materiel from "./modules/Materiel/Materiel";
import NosPrestations from "./modules/Prestations/NosPrestations";
import NosQualifications from "./modules/Qualifications/NosQualifications";
import NousContacter from "./modules/NousContacter/NousContacter";
import NosRealisations from "./modules/Realisations/NosRealisations";


function App() {
  return (
    <Router basename="/site_temci">
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/materiel" element={<Materiel />} />
          <Route path="/prestations" element={<NosPrestations />} />
          <Route path="/qualifications" element={<NosQualifications />} />
          <Route path="/realisations" element={<NosRealisations />} />
          <Route path="/contact" element={<NousContacter />} />
      </Routes>
    </Router>
  );
}

export default App;
