import { apiPost } from "src/api/axios";
import { ThunkAction } from "redux-thunk";

import { environment } from "src/environments/environment";

import {
  ETranslateActionTypeDefault,
  TTranslateDefaultType,
} from "../models/TranslateDefault.model";

import { RootState } from "../reducers";
import { Translate, TranslateInitialDefault } from "../types";
import { deleteLoader, setLoader } from "./LoaderAction";
import { setDetected } from "./DetectedAction";

const setTranslateDefault = (
  translateText: Translate
): ThunkAction<void, RootState, unknown, TTranslateDefaultType> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoader());
      const { data } = await apiPost.post<TranslateInitialDefault>(
        `${environment.rapidapi}/translate?${environment.api_Version}&from=${
          getState().language.languageFrom
        }&to=${getState().language.languageTo}`,
        translateText
      );
      dispatch({
        type: ETranslateActionTypeDefault.TRANSLATE_WORD_DEFAULT,
        payload: data,
      });
      dispatch(deleteLoader());
      dispatch(setDetected(translateText));
    } catch (error: unknown) {
      dispatch(deleteLoader());
    }
  };
};
export { setTranslateDefault };
