import { LanguagesInitialState } from '../types';

export enum ELanguageActionType {
  ALL_LANGUAGES = 'ALL-LANGUAGES',

  SET_LANGUAGE_FILTER_FROM = 'SET-LANGUAGE-FILTER-FROM',
  SET_LANGUAGE_FILTER_TO = 'SET-LANGUAGE-FILTER-TO',

  SET_TEXTAREA_FROM = 'SET-TEXTAREA-FROM',

  SET_TEXTAREA_TO = 'SET-TEXTAREA-TO',

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
export interface ITextAreaFROM {
  type: ELanguageActionType.SET_TEXTAREA_FROM;
  payload: LanguagesInitialState;
}
export interface ILanguageSwap {
  type: ELanguageActionType.SWAP_LANGUAGE;
  payload: LanguagesInitialState;
}

export type TLanguagesType =
  | ILanguagesSuccess
  | ILanguagesFROM
  | ILanguagesTO
  | ILanguageSwap
  | ITextAreaFROM;
