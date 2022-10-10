import { ThunkAction } from 'redux-thunk';

import { Cache } from 'src/shared/namespaces/cache.namespace';

import { RootState } from '../reducers';
import { FEATURE_KEY } from '../reducers/FavoritesReducer';

import { IFavorites } from 'src/shared/interfaces';

import { FavoritesInitialState } from '../types';

import { EFavoritesActionType, TFavoritesType } from '../models';

const token = 'favoritesCacheKey';

const setFavorites = (
  Data: IFavorites,
): ThunkAction<void, RootState, unknown, TFavoritesType> => {
  return async (dispatch, getState) => {

    const params: IFavorites = {
      from: Data.from,
      to: Data.to,
    };

    const newFavorites = [
      ...getState()[FEATURE_KEY].favorites,
      params,
    ];

    dispatch({
      type: EFavoritesActionType.SET_FAVORITES_SUCCESS,
      payload: newFavorites,
    });
    Cache.setValueToStorage(token, newFavorites);
  };
};
const getFavorites = (): ThunkAction<
  void,
  RootState,
  unknown,
  TFavoritesType
> => {
  const dict = Cache.getDictItems<FavoritesInitialState['favorites']>(token);

  return async (dispatch) => {
    dispatch({
      type: EFavoritesActionType.GET_FAVORITES,
      payload: dict,
    });
  };
};

export { setFavorites, getFavorites };
