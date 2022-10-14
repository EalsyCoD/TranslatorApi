import { LanguagesInitialState } from '../types';

export enum ELanguageActionType {
  ALL_LANGUAGES = 'ALL-LANGUAGES',

  SET_LANGUAGE_FILTER_FROM = 'SET-LANGUAGE-FILTER-FROM',
  SET_LANGUAGE_FILTER_TO = 'SET-LANGUAGE-FILTER-TO',

  SET_TEXT_AREA_FROM = 'SET-TEXT-AREA-FROM',
  SET_TEXT_AREA_TO = 'SET-TEXT-AREA-TO',

  SWAP_LANGUAGE = 'SWAP-LANGUAGE',
}

export interface ILanguagesSuccess {
  type: ELanguageActionType.ALL_LANGUAGES;
  payload: LanguagesInitialState;
}
export interface ILanguagesFROM {
  type: ELanguageActionType.SET_LANGUAGE_FILTER_FROM;
  payload: LanguagesInitialState;
}

export interface ILanguagesTO {
  type: ELanguageActionType.SET_LANGUAGE_FILTER_TO;
  payload: LanguagesInitialState;
}
export interface ILanguageSwap {
  type: ELanguageActionType.SWAP_LANGUAGE;
  payload: LanguagesInitialState;
}
export interface ISetTextFrom {
  type: ELanguageActionType.SET_TEXT_AREA_FROM;
  payload: LanguagesInitialState;
}
export interface ISetTextTo {
  type: ELanguageActionType.SET_TEXT_AREA_TO;
  payload: LanguagesInitialState;
}

export type TLanguagesType =
  | ILanguagesSuccess
  | ILanguagesFROM
  | ILanguagesTO
  | ILanguageSwap
  | ISetTextFrom
  | ISetTextTo
