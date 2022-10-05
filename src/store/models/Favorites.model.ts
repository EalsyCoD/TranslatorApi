import { FavoritesState } from "../types";

export enum EFavoritesActionType {
  NEW_FAVORITES = "NEW-FAVORITES",
}

export interface IFavoritesSuccess {
  type: EFavoritesActionType.NEW_FAVORITES;
  payload: any;
}

export type TFavoritesType = IFavoritesSuccess;
