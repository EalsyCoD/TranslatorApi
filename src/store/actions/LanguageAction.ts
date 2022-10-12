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
  return async (dispatch) => {

    dispatch({
      type: ELanguageActionType.SET_LANGUAGE_FILTER_FROM,
      payload: {
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
    const { languageFrom } = getState().language;

    dispatch({
      type: ELanguageActionType.SET_LANGUAGE_FILTER_TO,
      payload: {
        languageTo,
        languageFrom: languageFrom,
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
    const { languageFrom, languageTo } = getState().language;

    dispatch({
      type: ELanguageActionType.SWAP_LANGUAGE,
      payload: {
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
};
