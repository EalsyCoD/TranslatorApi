import api from "src/api/axios";
import { ThunkAction } from "redux-thunk";

import { LanguagesState, RootState } from "../types";

import { ELanguageActionType, TLanguagesType } from "../models/Language.model";

const setLanguages = (): ThunkAction<
  void,
  RootState,
  unknown,
  TLanguagesType
> => {
  return async (dispatch) => {
    try {
      const { data } = await api.get<LanguagesState>(
        "/languages?api-version=3.0"
      );

      dispatch({
        type: ELanguageActionType.ALL_LANGUAGES,
        payload: data,
      });
    } catch (error: unknown) {}
  };
};

const setLanguageFilterFrom = (
  languageFrom: string
): ThunkAction<void, RootState, unknown, TLanguagesType> => {
  return async (dispatch) => {
    dispatch({
      type: ELanguageActionType.SET_LANGUAGE_FILTER_FROM,
      payload: {
        languageFrom,
        languageTo: "",
      },
    });
  };
};
const setLanguageFilterTo = (
  languageTo: string
): ThunkAction<void, RootState, unknown, TLanguagesType> => {
  return async (dispatch, getState) => {
    dispatch({
      type: ELanguageActionType.SET_LANGUAGE_FILTER_TO,
      payload: {
        languageTo,
        languageFrom: getState().languages.languageFrom,
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
    dispatch({
      type: ELanguageActionType.SWAP_LANGUAGE,
      payload: {
        languageTo: getState().languages.languageFrom,
        languageFrom: getState().languages.languageTo,
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
