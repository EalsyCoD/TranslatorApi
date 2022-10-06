import { FavoritesInitialState } from '../types';

export enum EFavoritesActionType {
  SET_FAVORITES_SUCCESS = 'SET-FAVORITES-SUCCESS',

  GET_FAVORITES = 'GET-FAVORITES',
}

export interface IFavoritesSuccess {
  type: EFavoritesActionType.SET_FAVORITES_SUCCESS;
  payload: FavoritesInitialState['favorites'];
}
export interface IFavoritesGet {
  type: EFavoritesActionType.GET_FAVORITES;
  payload: FavoritesInitialState['favorites'];
}

export type TFavoritesType = IFavoritesSuccess | IFavoritesGet;
