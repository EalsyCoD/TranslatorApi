import { TranslateInitialState } from '../types';

export enum ETranslateActionType {
  TRANSLATE_WORD = 'TRANSLATE-WORD',

  TRANSLATE_DEFAULT_WORD = 'TRANSLATE-DEFAULT-WORD',

  DETECTED_SUCCESS = 'DETECTED-SUCCESS',

  SET_TRANSLATES_SUCCESS = 'SET-TRANSLATES-SUCCESS',
  GET_TRANSLATES = 'GET-TRANSLATES',
}

export interface ITranslateSucess {
  type: ETranslateActionType.TRANSLATE_WORD
  payload: TranslateInitialState['itemsTranslate']
}
export interface ITranslateDefaultSucess {
  type: ETranslateActionType.TRANSLATE_DEFAULT_WORD
  payload: TranslateInitialState['itemsTranslateDefault']
}
export interface IDetectedSucess {
  type: ETranslateActionType.DETECTED_SUCCESS
  payload: TranslateInitialState['itemsDetected']
}
export interface ITranslatesLastSuccess {
  type: ETranslateActionType.SET_TRANSLATES_SUCCESS
  payload: TranslateInitialState['lastTranslates']
}
export interface ITranslatesLastGet {
  type: ETranslateActionType.GET_TRANSLATES
  payload: TranslateInitialState['lastTranslates']
}

export type TTranslateType =
  | ITranslateSucess
  | ITranslateDefaultSucess
  | IDetectedSucess
  | ITranslatesLastSuccess
  | ITranslatesLastGet
