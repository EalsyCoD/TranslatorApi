import { EFavoritesActionType, TFavoritesType } from "../models";

import { FavoritesInitialState } from "../types";

export const FEATURE_KEY = "favorites";

export type Favorites = FavoritesInitialState;

const initialState: Favorites = {
  favorites: [],
};

export const reducer = (
  state: FavoritesInitialState = initialState,
  action: TFavoritesType
): FavoritesInitialState => {
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
