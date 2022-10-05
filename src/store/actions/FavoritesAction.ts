import { ThunkAction } from "redux-thunk";
import {
  EFavoritesActionType,
  TFavoritesType,
} from "../models/Favorites.model";

import { RootState } from "../reducers";

const setFavorites = (
  from: string,
  to: string
): ThunkAction<void, RootState, unknown, TFavoritesType> => {
  return async (dispatch) => {
    localStorage.setItem("token", from);
    dispatch({
      type: EFavoritesActionType.NEW_FAVORITES,
      payload: {
        from,
        to,
      },
    });
  };
};

export { setFavorites };
