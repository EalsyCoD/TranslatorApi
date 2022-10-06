import { FavoritesInitialState } from '../types';

export enum ELastTranslatesActionType {
  SET_TRANSLATES_SUCCESS = 'SET-TRANSLATES-SUCCESS',

  GET_TRANSLATES = 'GET-TRANSLATES',
}

export interface ITranslatesLastSuccess {
  type: ELastTranslatesActionType.SET_TRANSLATES_SUCCESS;
  payload: FavoritesInitialState['favorites'];
}
export interface ITranslatesLastGet {
  type: ELastTranslatesActionType.GET_TRANSLATES;
  payload: FavoritesInitialState['favorites'];
}

export type TTranslatesLastType = ITranslatesLastSuccess | ITranslatesLastGet;
