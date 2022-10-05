import { apiPost } from "src/api/axios";
import { ThunkAction } from "redux-thunk";

import { environment } from "src/environments/environment";

import { RootState } from "../reducers";
import { DetectedInitialState, Translate } from "../types";

import { EDetectedActionType, TDetectedType } from "../models/Detected.model";

const setDetected = (
  translateText: Translate
): ThunkAction<void, RootState, unknown, TDetectedType> => {
  return async (dispatch) => {
    try {
      const { data } = await apiPost.post<DetectedInitialState>(
        `${environment.rapidapi}/Detect?${environment.api_Version}`,
        translateText
      );
      dispatch({
        type: EDetectedActionType.DETECTED_SUCCESS,
        payload: data,
      });
    } catch (error: unknown) {}
  };
};

export { setDetected };
