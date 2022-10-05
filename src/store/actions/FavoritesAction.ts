import { ThunkAction } from "redux-thunk";
import {
  EFavoritesActionType,
  TFavoritesType,
} from "../models/Favorites.model";

import { RootState } from "../reducers";
import { FEATURE_KEY } from "../reducers/FavoritesReducer";
import { CacheService } from "../services/cacheService";
import { FavoritesState } from "../types";

const token = "token";

const setFavorites = (
  Data: FavoritesState
): ThunkAction<void, RootState, unknown, TFavoritesType> => {
  return async (dispatch, getState) => {
    const newFavorites = [
      ...getState()[FEATURE_KEY].favorites,
      ...Data.favorites,
    ];
    console.log(newFavorites);
    dispatch({
      type: EFavoritesActionType.SET_FAVORITES_SUCCESS,
      payload: newFavorites,
    });

    localStorage.setItem(token, JSON.stringify(newFavorites));
    console.log(Data);
  };
};
const getFavorites = (): ThunkAction<
  void,
  RootState,
  unknown,
  TFavoritesType
> => {
  const dict = new CacheService().getDictItems<FavoritesState["favorites"]>(
    token
  );
  console.log(dict);
  return async (dispatch) => {
    dispatch({
      type: EFavoritesActionType.GET_FAVORITES,
      payload: dict,
    });
  };
};

export { setFavorites, getFavorites };
