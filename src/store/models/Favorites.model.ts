import { FavoritesState } from "../types";

export enum EFavoritesActionType {
  SET_FAVORITES_SUCCESS = "SET-FAVORITES-SUCCESS",

  GET_FAVORITES = "GET-FAVORITES",
}

export interface IFavoritesSuccess {
  type: EFavoritesActionType.SET_FAVORITES_SUCCESS;
  payload: FavoritesState["favorites"];
}
export interface IFavoritesGet {
  type: EFavoritesActionType.GET_FAVORITES;
  payload: FavoritesState["favorites"];
}

export type TFavoritesType = IFavoritesSuccess | IFavoritesGet;
