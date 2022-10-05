import { apiGet } from "src/api/axios";
import { ThunkAction } from "redux-thunk";

import { RootState } from "../reducers";
import { LanguagesState } from "../types";

import { ELanguageActionType, TLanguagesType } from "../models/Language.model";

const setLanguages = (): ThunkAction<
  void,
  RootState,
  unknown,
  TLanguagesType
> => {
  return async (dispatch) => {
    try {
      const { data } = await apiGet.get<LanguagesState>("/languages");
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
        languageFrom: getState().language.languageFrom,
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
        languageTo: getState().language.languageFrom,
        languageFrom: getState().language.languageTo,
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
