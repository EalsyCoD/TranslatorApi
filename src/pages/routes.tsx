import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from './MainPage/MainPage';
import { FavoritesPage } from './FavoritesPage/FavoritesPage';

export const RoutesPages = (): JSX.Element => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </React.Fragment>
  );
};
