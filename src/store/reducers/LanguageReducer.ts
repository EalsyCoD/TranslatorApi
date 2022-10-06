import { ELanguageActionType, TLanguagesType } from '../models';

import { LanguagesInitialState } from '../types';

export const FEATURE_KEY = 'language';

export type LanguageState = LanguagesInitialState;

const initialState: LanguageState = {
  translation: [],
  languageFrom: 'Auto Language Select',
  languageTo: '',
  textAreaFrom: '',
  textAreaTo: '',
};

export const reducer = (
  state: LanguagesInitialState = initialState,
  action: TLanguagesType,
): LanguagesInitialState => {
  switch (action.type) {
    case ELanguageActionType.ALL_LANGUAGES:
      return {
        translation: action.payload.translation,
        languageFrom: initialState.languageFrom,
        languageTo: initialState.languageTo,
        textAreaFrom: initialState.textAreaFrom,
        textAreaTo: initialState.textAreaTo,
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
    case ELanguageActionType.SET_TEXTAREA_FROM:
      return {
        ...state,
        textAreaFrom: action.payload.textAreaFrom,
        textAreaTo: action.payload.textAreaTo,
      };

    default:
      return state;
  }
};
