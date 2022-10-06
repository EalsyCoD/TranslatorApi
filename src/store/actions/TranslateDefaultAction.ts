import { apiPost } from "src/api/axios";
import { ThunkAction } from "redux-thunk";

import { environment } from "src/environments/environment";

import { RootState } from "../reducers";
import { Translate, TranslateDefaultInitialState } from "../types";
import { deleteLoader, setLoader } from "./LoaderAction";

import { ETranslateActionTypeDefault, TTranslateDefaultType } from "../models";

const setTranslateDefault = (
  translateText: Translate
): ThunkAction<void, RootState, unknown, TTranslateDefaultType> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoader());
      const { data } = await apiPost.post<TranslateDefaultInitialState>(
        `${environment.rapidapi}/translate?${environment.api_Version}&from=${
          getState().detected?.[0].language
        }&to=${getState().language.languageTo}`,
        translateText
      );
      dispatch({
        type: ETranslateActionTypeDefault.TRANSLATE_WORD_DEFAULT,
        payload: data,
      });
      dispatch(deleteLoader());
    } catch (error: unknown) {
      dispatch(deleteLoader());
    }
  };
};
export { setTranslateDefault };
