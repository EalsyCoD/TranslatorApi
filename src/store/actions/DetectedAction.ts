import { apiPost } from "src/api/axios";
import { ThunkAction } from "redux-thunk";

import { environment } from "src/environments/environment";

import { DetectedState, RootState, Translate } from "../types";

import { EDetectedActionType, TDetectedType } from "../models/Detected.modile";

const setDetected = (
  translateText: Translate
): ThunkAction<void, RootState, unknown, TDetectedType> => {
  return async (dispatch) => {
    try {
      const { data } = await apiPost.post<DetectedState>(
        `${environment.rapidapi}/Detect?api-version=3.0`,
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
          type: EDetectedActionType.DETECTED_SUCCESS,
          payload: data,
        });
      }, 2000);
    } catch (error: unknown) {}
  };
};

export { setDetected };
