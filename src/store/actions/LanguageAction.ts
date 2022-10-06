import { apiGet } from "src/api/axios";
import { ThunkAction } from "redux-thunk";

import { RootState } from "../reducers";

import { ELanguageActionType, TLanguagesType } from "../models";

import { LanguagesInitialState } from "../types";

const setLanguages = (): ThunkAction<
  void,
  RootState,
  unknown,
  TLanguagesType
> => {
  return async (dispatch) => {
    try {
      const { data } = await apiGet.get<LanguagesInitialState>("/languages");
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
  return async (dispatch, getState) => {
    dispatch({
      type: ELanguageActionType.SET_LANGUAGE_FILTER_FROM,
      payload: {
        textAreaFrom: getState().language.textAreaFrom,
        textAreaTo: getState().language.textAreaTo,
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
        textAreaFrom: getState().language.textAreaFrom,
        textAreaTo: getState().language.textAreaTo,
        languageTo,
        languageFrom: getState().language.languageFrom,
      },
    });
  };
};
const setTextAreaTranslateFrom = (
  textAreaFrom: string
): ThunkAction<void, RootState, unknown, TLanguagesType> => {
  return async (dispatch, getState) => {
    dispatch({
      type: ELanguageActionType.SET_TEXTAREA_FROM,
      payload: {
        textAreaFrom,
        textAreaTo: getState().translateDefault?.[0].translations?.[0].text,
        languageFrom: getState().language.languageFrom,
        languageTo: getState().language.languageTo,
      },
    });
  };
};
// const setTextAreaTranslateTo = (): ThunkAction<
//   void,
//   RootState,
//   unknown,
//   TLanguagesType
// > => {
//   return async (dispatch, getState) => {
//     dispatch({
//       type: ELanguageActionType.SET_LANGUAGE_FILTER_TO,
//       payload: {
//         textAreaTo: getState().translateDefault?.[0].translations?.[0].text,
//         textAreaFrom: getState().language.textAreaFrom,
//         languageFrom: getState().language.languageFrom,
//         languageTo: getState().language.languageTo,
//       },
//     });
//   };
// };
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
        textAreaTo: getState().language.textAreaTo,
        textAreaFrom: getState().language.textAreaFrom,
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
  setTextAreaTranslateFrom,
  // setTextAreaTranslateTo,
};
