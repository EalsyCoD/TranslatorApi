import React from "react";
import { Route, Routes } from "react-router-dom";
import { FavoritesPage } from "./FavoritesPage/FavoritesPage";
import { MainPage } from "./MainPage/MainPage";

export const RoutesPages = (): JSX.Element => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </React.Fragment>
  );
};
