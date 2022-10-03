import axios from "axios";
import { ThunkAction } from "redux-thunk";

import { LanguagesState, RootState } from "../types";

import { ELanguageActionType, TLanguagesType } from "../models/LanguageAction";

const baseUrl: string = "https://api.cognitive.microsofttranslator.com";

const setLanguages = (): ThunkAction<
  void,
  RootState,
  unknown,
  TLanguagesType
> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get<LanguagesState>(
        `${baseUrl}/languages?api-version=3.0`
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

export { setLanguages, setLanguageFilterFrom, setLanguageFilterTo };
