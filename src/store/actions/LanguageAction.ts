import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { LanguagesState, RootState } from "../types";

const baseUrl: string = "https://api.cognitive.microsofttranslator.com";

const setLanguages = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get<LanguagesState>(
        `${baseUrl}/languages?api-version=3.0`
      );

      dispatch({
        type: "ALL-LANGUAGES",
        payload: data,
      });
    } catch (error: unknown) {}
  };
};

export { setLanguages };
