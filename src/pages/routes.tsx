import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { FavoritesPage } from "./FavoritesPage/FavoritesPage";
import { MainPage } from "./MainPage/MainPage";

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
