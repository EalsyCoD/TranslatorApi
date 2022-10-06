import { apiPost } from "src/api/axios";
import { ThunkAction } from "redux-thunk";

import { environment } from "src/environments/environment";

import { RootState } from "../reducers";
import { Translate, TranslateInitialState } from "../types";

import { setDetected } from "./DetectedAction";

import { deleteLoader, setLoader } from "./LoaderAction";

import { ETranslateActionType, TTranslateType } from "../models";

const setTranslate = (
  translateText: Translate
): ThunkAction<void, RootState, unknown, TTranslateType> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoader());
      const { data } = await apiPost.post<TranslateInitialState>(
        `${environment.rapidapi}/translate?${environment.api_Version}&to=${
          getState().language.languageTo
        }`,
        translateText
      );
      setTimeout(() => {
        dispatch({
          type: ETranslateActionType.TRANSLATE_WORD,
          payload: data,
        });
        dispatch(setDetected(translateText));
        dispatch(deleteLoader());
      }, 2000);
    } catch (error: unknown) {
      dispatch(deleteLoader());
    }
  };
};

export { setTranslate };
