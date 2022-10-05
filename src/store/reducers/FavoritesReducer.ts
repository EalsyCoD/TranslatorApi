import {
  EFavoritesActionType,
  TFavoritesType,
} from "../models/Favorites.model";

import { FavoritesState } from "../types";

export const FEATURE_KEY = "favorites";

export type Favorites = FavoritesState;

const initialState: Favorites = {
  favorites: [],
};

export const reducer = (
  state: Favorites = initialState,
  action: TFavoritesType
): Favorites => {
  switch (action.type) {
    case EFavoritesActionType.NEW_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};