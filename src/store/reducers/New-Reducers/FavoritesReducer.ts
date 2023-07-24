import { InferValueTypes } from 'interfaces/ActionCreators';
import { EFavoritesActionType } from '../../models';
import * as actions from '../../ActionsCreators/FavoritesAction';

import { FavoritesInitialState } from '../../types';

type FavoritesActionsTypes = ReturnType<InferValueTypes<typeof actions>>

export const FEATURE_KEY = 'favorites';

export type Favorites = FavoritesInitialState;

const initialState: Favorites = {
  favorites: [],
};

export const reducer = (
  state: FavoritesInitialState = initialState,
  action: FavoritesActionsTypes,
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
