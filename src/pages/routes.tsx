import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { MainPage } from './MainPage/MainPage';
import { FavoritesPage } from './FavoritesPage/FavoritesPage';

export function RoutesPages(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
