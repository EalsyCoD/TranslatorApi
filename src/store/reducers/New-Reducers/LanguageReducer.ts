import { InferValueTypes } from 'interfaces/ActionCreators';
import { ELanguageActionType } from 'store/models';
import { LanguagesInitialState } from 'store/types';
import * as actions from '../../ActionsCreators/LanguageAction';

type LanguageActionsTypes = ReturnType<InferValueTypes<typeof actions>>

export const FEATURE_KEY = 'language';

export type LanguageState = LanguagesInitialState;

const initialState: LanguageState = {
  translation: [],
  languageFrom: 'Auto Language Select',
  languageTo: 'Auto Language Select',
  textAreaFrom: '',
  textAreaTo: '',
};

export const reducer = (
  state: LanguagesInitialState = initialState,
  action: LanguageActionsTypes,
): LanguageState => {
  switch (action.type) {
    case ELanguageActionType.ALL_LANGUAGES:
      return { ...state, ...action.payload };
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
    case ELanguageActionType.SET_TEXT_AREA_FROM:
      return {
        ...state,
        textAreaFrom: action.payload.textAreaFrom,
      };
    case ELanguageActionType.SET_TEXT_AREA_TO:
      return {
        ...state,
        textAreaTo: action.payload.textAreaTo,
      };
    case ELanguageActionType.SWAP_LANGUAGE:
      return {
        ...state,
        languageFrom: action.payload.languageFrom,
        languageTo: action.payload.languageTo,
        textAreaFrom: action.payload.textAreaFrom,
        textAreaTo: action.payload.textAreaTo,
      };

    default:
      return state;
  }
};
