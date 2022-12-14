import { apiGet } from 'src/api/axios';
import axios, { AxiosError } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';

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
    } catch (err: unknown) {
      const error = err as Error | AxiosError;
      if (axios.isAxiosError(error)) {
        toast.error('Error fetching data languages');
      }
    }
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

const setTextAreaFromState = (
  textAreaFrom: string,
): ThunkAction<void, RootState, unknown, TLanguagesType> => {
  return async (dispatch) => {

    dispatch({
      type: ELanguageActionType.SET_TEXT_AREA_FROM,
      payload: {
        textAreaFrom,
      },
    });
  };
};
const setTextAreaToState = (
  textAreaTo: string,
): ThunkAction<void, RootState, unknown, TLanguagesType> => {
  return async (dispatch) => {

    dispatch({
      type: ELanguageActionType.SET_TEXT_AREA_TO,
      payload: {
        textAreaTo,
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
    const { languageFrom, languageTo, textAreaFrom, textAreaTo } = getState().language;

    dispatch({
      type: ELanguageActionType.SWAP_LANGUAGE,
      payload: {
        languageTo: languageFrom,
        languageFrom: languageTo,
        textAreaFrom: textAreaTo,
        textAreaTo: textAreaFrom,
      },
    });
    toast.success('Languages Switched');
  };
};

export {
  setLanguages,
  setLanguageFilterFrom,
  setLanguageFilterTo,
  swapLangauges,
  setTextAreaFromState,
  setTextAreaToState,
};
