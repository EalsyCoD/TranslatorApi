import { Favorites } from "../types";

export enum EFavoritesActionType {
  NEW_FAVORITES = "NEW-FAVORITES",

  GET_FAVORITES = "GET-FAVORITES",

  GET_TOKEN_FAIL = "GET-TOKEN-FAIL",
}

export interface IFavoritesSuccess {
  type: EFavoritesActionType.NEW_FAVORITES;
  payload: Favorites;
}
export interface IFavoritesGet {
  type: EFavoritesActionType.GET_FAVORITES;
  payload: true;
}
export interface IFavoritesFail {
  type: EFavoritesActionType.GET_FAVORITES;
  payload: false;
}

export type TFavoritesType = IFavoritesSuccess | IFavoritesGet | IFavoritesFail;
