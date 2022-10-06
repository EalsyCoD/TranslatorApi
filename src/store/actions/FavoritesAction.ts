import { ThunkAction } from "redux-thunk";

import { Cache } from "src/shared/namespaces/cache.namespace";

import { RootState } from "../reducers";
import { FEATURE_KEY } from "../reducers/FavoritesReducer";

import { FavoritesInitialState } from "../types";

import { EFavoritesActionType, TFavoritesType } from "../models";

const token = "token";

const setFavorites = (
  Data: FavoritesInitialState
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
    Cache.setValueToStorage(token, newFavorites);
    console.log(Data);
  };
};
const getFavorites = (): ThunkAction<
  void,
  RootState,
  unknown,
  TFavoritesType
> => {
  const dict = Cache.getDictItems<FavoritesInitialState["favorites"]>(token);

  return async (dispatch) => {
    dispatch({
      type: EFavoritesActionType.GET_FAVORITES,
      payload: dict,
    });
  };
};

export { setFavorites, getFavorites };
