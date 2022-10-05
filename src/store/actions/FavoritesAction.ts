import { ThunkAction } from "redux-thunk";
import {
  EFavoritesActionType,
  TFavoritesType,
} from "../models/Favorites.model";

import { RootState } from "../reducers";
import { Favorites } from "../types";

const setFavorites = (
  Data: Favorites
): ThunkAction<void, RootState, unknown, TFavoritesType> => {
  return async (dispatch) => {
    dispatch({
      type: EFavoritesActionType.NEW_FAVORITES,
      payload: Data,
    });
    localStorage.setItem("token", Data.token as string);
  };
};
const getFavorites = (): ThunkAction<
  void,
  RootState,
  unknown,
  TFavoritesType
> => {
  return async (dispatch) => {
    if (localStorage.getItem("token")) {
      dispatch({
        type: EFavoritesActionType.GET_FAVORITES,
        payload: true,
      });
    }
    return dispatch({
      type: EFavoritesActionType.GET_FAVORITES,
      payload: true,
    });
  };
};

export { setFavorites, getFavorites };
