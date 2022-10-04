import { apiPost } from "src/api/axios";
import { ThunkAction } from "redux-thunk";
import { environment } from "src/environments/environment";

import { RootState, Translate, TranslateState } from "../types";

import {
  ETranslateActionType,
  TTranslateType,
} from "../models/Translate.model";
import { deleteLoader, setLoader } from "./LoaderAction";

const setTranslate = (
  translateText: Translate
): ThunkAction<void, RootState, unknown, TTranslateType> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoader());

      const { data } = await apiPost.post<TranslateState>(
        `${environment.rapidapi}/translate?api-version=3.0&to=${
          getState().languages.languageTo
        }`,
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
      setTimeout(() => {
        dispatch({
          type: ETranslateActionType.TRANSLATE_WORD,
          payload: data,
        });
        dispatch(deleteLoader());
      }, 2000);
    } catch (error: unknown) {
      dispatch(deleteLoader());
    }
  };
};

export { setTranslate };
