import { IFavorites } from 'shared/interfaces'

import { EFavoritesActionType } from '../models'

export const setFavorites = (newFavorites: IFavorites[]) =>
  <const>{
    type: EFavoritesActionType.SET_FAVORITES_SUCCESS,
    payload: newFavorites,
  }

export const setFavoritesSave = () =>
  <const>{
    type: 'FAVORITES-SAVE',
  }

export const getFavorites = (dict: IFavorites[] | []) =>
  <const>{
    type: EFavoritesActionType.GET_FAVORITES,
    payload: dict,
  }

export const getFavoritesSave = () =>
  <const>{
    type: 'FAVORITES-SAVE-GET',
  }

// const token = 'favoritesCacheKey';

// const setFavorites = (
//   Data: IFavorites,
// ): ThunkAction<void, RootState, unknown, TFavoritesType> => {
//   return async (dispatch, getState) => {

//     const params: IFavorites = {
//       from: Data.from,
//       to: Data.to,
//     };

//     const newFavorites = [
//       ...getState()[FEATURE_KEY].favorites,
//       params,
//     ];

//     dispatch({
//       type: EFavoritesActionType.SET_FAVORITES_SUCCESS,
//       payload: newFavorites,
//     });
//     Cache.setValueToStorage(token, newFavorites);
//   };
// };
// const getFavorites = (): ThunkAction<
//   void,
//   RootState,
//   unknown,
//   TFavoritesType
// > => {
//   const dict = Cache.getDictItems<FavoritesInitialState['favorites']>(token);

//   return async (dispatch) => {
//     dispatch({
//       type: EFavoritesActionType.GET_FAVORITES,
//       payload: dict,
//     });
//   };
// };
