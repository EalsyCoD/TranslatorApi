import { LanguagesInitialState } from "../types";

export enum ELanguageActionType {
  ALL_LANGUAGES = "ALL-LANGUAGES",

  SET_LANGUAGE_FILTER_FROM = "SET-LANGUAGE-FILTER-FROM",
  SET_LANGUAGE_FILTER_TO = "SET-LANGUAGE-FILTER-TO",

  SWAP_LANGUAGE = "SWAP-LANGUAGE",
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

export type TLanguagesType =
  | ILanguagesSuccess
  | ILanguagesFROM
  | ILanguagesTO
  | ILanguageSwap;
