import { ELanguageActionType, TLanguagesType } from "../models/Language.model";

import { LanguagesState } from "../types";

export const FEATURE_KEY = "language";

export type State = LanguagesState;

const initialState: State = {
  translation: [],
  languageFrom: "Auto Language Select",
  languageTo: "",
};

export const reducer = (
  state: LanguagesState = initialState,
  action: TLanguagesType
): LanguagesState => {
  switch (action.type) {
    case ELanguageActionType.ALL_LANGUAGES:
      return {
        translation: action.payload.translation,
        languageFrom: initialState.languageFrom,
        languageTo: initialState.languageTo,
      };
    case ELanguageActionType.SET_LANGUAGE_FILTER_FROM:
      return {
        ...state,
        languageFrom: action.payload.languageFrom,
      };
    case ELanguageActionType.SET_LANGUAGE_FILTER_TO:
      return {
        ...state,
        languageTo: action.payload.languageTo,
      };
    case ELanguageActionType.SWAP_LANGUAGE:
      return {
        ...state,
        languageFrom: action.payload.languageFrom,
        languageTo: action.payload.languageTo,
      };

    default:
      return state;
  }
};
