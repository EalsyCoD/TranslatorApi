import api from "src/api/axios";

import { ThunkAction } from "redux-thunk";

import { RootState, TranslateState } from "../types";

import {
  ETranslateActionType,
  TTranslateType,
} from "../models/Translate.model";

const setTranslate = (
  translateText: string
): ThunkAction<void, RootState, unknown, TTranslateType> => {
  return async (dispatch, getState) => {
    try {
      const { data } = await api.post<TranslateState>(
        `/translate?api-version=3.0&to=${getState().languages.languageTo}`,
        translateText
      );
      dispatch({
        type: ETranslateActionType.TRANSLATE_WORD,
        payload: data,
      });
    } catch (error: unknown) {}
  };
};

export { setTranslate };
