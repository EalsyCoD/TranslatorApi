import { apiPost } from "src/api/axios";
import { ThunkAction } from "redux-thunk";

import { environment } from "src/environments/environment";

import {
  ETranslateActionTypeDefault,
  TTranslateDefaultType,
} from "../models/TranslateDefault.model";

import { RootState, Translate, TranslateDefaultWord } from "../types";

const setTranslateDefault = (
  translateText: Translate
): ThunkAction<void, RootState, unknown, TTranslateDefaultType> => {
  return async (dispatch, getState) => {
    try {
      const { data } = await apiPost.post<TranslateDefaultWord>(
        `${environment.rapidapi}/translate?api-version=3.0&from=${
          getState().languages.languageFrom
        }&to=${getState().languages.languageTo}`,
        translateText,
        {
          headers: {
            "Content-type": "application/json",
            "X-RapidAPI-Key":
              "b823df7ae0mshc187bf2e6786d47p18a7b7jsnd315b345ae93",
            "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
          },
        }
      );
      dispatch({
        type: ETranslateActionTypeDefault.TRANSLATE_WORD_DEFAULT,
        payload: data,
      });
    } catch (error: unknown) {}
  };
};

export { setTranslateDefault };
