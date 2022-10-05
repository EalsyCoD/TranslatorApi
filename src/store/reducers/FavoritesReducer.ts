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
  state: FavoritesState = initialState,
  action: TFavoritesType
): FavoritesState => {
  switch (action.type) {
    case EFavoritesActionType.SET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.payload,
      };
    case EFavoritesActionType.GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
};
