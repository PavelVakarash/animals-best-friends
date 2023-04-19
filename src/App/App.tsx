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
      <Route path="/animals-best-friends" element={<Layout />}>
        <Route path="/animals-best-friends" element={<HomePage />} />
        <Route path="/wolf" element={<WolfPage />} />
        <Route path="dog" element={<DogPage />} />
        <Route path="animals-best-friends/cat" element={<CatPage />} />
        <Route path="/animals-best-friends/pig" element={<PigPage />} />
      </Route>
    </Routes>
  );
}

export default App;
