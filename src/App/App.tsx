import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../HomePage/HomePage';
import WolfPage from '../WolfPage/WolfPage';
import DogPage from '../DogPage/DogPage';
import CatPage from '../CatPage/CatPage';
import PigPage from '../PigPage/PigPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="wolf" element={<WolfPage />} />
        <Route path="dog" element={<DogPage />} />
        <Route path="cat" element={<CatPage />} />
        <Route path="pig" element={<PigPage />} />
      </Route>
    </Routes>
  );
}

export default App;
