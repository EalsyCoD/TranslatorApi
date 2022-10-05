import { apiPost } from "src/api/axios";
import { ThunkAction } from "redux-thunk";

import { environment } from "src/environments/environment";

import {
  ETranslateActionTypeDefault,
  TTranslateDefaultType,
} from "../models/TranslateDefault.model";

import { RootState } from "../reducers";
import { Translate, TranslateDefault } from "../types";
import { deleteLoader, setLoader } from "./LoaderAction";
import { setDetected } from "./DetectedAction";

const setTranslateDefault = (
  translateText: Translate
): ThunkAction<void, RootState, unknown, TTranslateDefaultType> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoader());
      const { data } = await apiPost.post<TranslateDefault>(
        `${environment.rapidapi}/translate?api-version=3.0&from=${
          getState().language.languageFrom
        }&to=${getState().language.languageTo}`,
        translateText
      );
      setTimeout(() => {
        dispatch({
          type: ETranslateActionTypeDefault.TRANSLATE_WORD_DEFAULT,
          payload: data,
        });
        dispatch(deleteLoader());
        dispatch(setDetected(translateText));
      }, 2000);
    } catch (error: unknown) {
      dispatch(deleteLoader());
    }
  };
};

export { setTranslateDefault };
