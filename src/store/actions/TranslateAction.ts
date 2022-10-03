import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { RootState, TranslateState } from "../types";

const baseUrl: string = "https://api.cognitive.microsofttranslator.com";

const setTranslate = (
  translateText: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post<TranslateState>(
        `${baseUrl}/translate?api-version=3.0&to`,
        translateText
      );
      dispatch({
        type: "NEW-TRANSLATE",
        payload: data,
      });
    } catch (error: unknown) {}
  };
};

export { setTranslate };
