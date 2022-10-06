import { apiGet } from 'src/api/axios';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../reducers';

import { ELanguageActionType, TLanguagesType } from '../models';

import { LanguagesInitialState } from '../types';

const setLanguages = (): ThunkAction<
  void,
  RootState,
  unknown,
  TLanguagesType
> => {
  return async (dispatch) => {
    try {
      const { data } = await apiGet.get<LanguagesInitialState>('/languages');
      dispatch({
        type: ELanguageActionType.ALL_LANGUAGES,
        payload: data,
      });
    } catch (error: unknown) {}
  };
};

const setLanguageFilterFrom = (
  languageFrom: string,
): ThunkAction<void, RootState, unknown, TLanguagesType> => {
  return async (dispatch, getState) => {
    const { textAreaFrom, textAreaTo } = getState().language;

    dispatch({
      type: ELanguageActionType.SET_LANGUAGE_FILTER_FROM,
      payload: {
        textAreaFrom: textAreaFrom,
        textAreaTo: textAreaTo,
        languageFrom,
        languageTo: '',
      },
    });
  };
};
const setLanguageFilterTo = (
  languageTo: string,
): ThunkAction<void, RootState, unknown, TLanguagesType> => {
  return async (dispatch, getState) => {
    const { textAreaFrom, textAreaTo, languageFrom } = getState().language;

    dispatch({
      type: ELanguageActionType.SET_LANGUAGE_FILTER_TO,
      payload: {
        textAreaFrom: textAreaFrom,
        textAreaTo: textAreaTo,
        languageTo,
        languageFrom: languageFrom,
      },
    });
  };
};
const setTextAreaTranslateFrom = (
  textAreaFrom: string,
): ThunkAction<void, RootState, unknown, TLanguagesType> => {
  return async (dispatch, getState) => {
    const { text } = getState().translateDefault?.[0].translations?.[0];
    const { languageFrom, languageTo } = getState().language;

    dispatch({
      type: ELanguageActionType.SET_TEXTAREA_FROM,
      payload: {
        textAreaFrom,
        textAreaTo: text,
        languageFrom: languageFrom,
        languageTo: languageTo,
      },
    });
  };
};
const swapLangauges = (): ThunkAction<
  void,
  RootState,
  unknown,
  TLanguagesType
> => {
  return async (dispatch, getState) => {
    const { textAreaTo, textAreaFrom, languageFrom, languageTo } =
      getState().language;

    dispatch({
      type: ELanguageActionType.SWAP_LANGUAGE,
      payload: {
        textAreaTo: textAreaTo,
        textAreaFrom: textAreaFrom,
        languageTo: languageFrom,
        languageFrom: languageTo,
      },
    });
  };
};

export {
  setLanguages,
  setLanguageFilterFrom,
  setLanguageFilterTo,
  swapLangauges,
  setTextAreaTranslateFrom,
};
