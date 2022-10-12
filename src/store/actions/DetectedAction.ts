import { apiPost } from 'src/api/axios';
import { ThunkAction } from 'redux-thunk';

import { environment } from 'src/environments/environment';

import { RootState } from '../reducers';
import { DetectedInitialState } from '../types';

import { Translate } from 'src/shared/interfaces';

import { EDetectedActionType, TDetectedType } from '../models';

const setDetected = (
  translateText: string,
): ThunkAction<void, RootState, unknown, TDetectedType> => {
  return async (dispatch) => {

    const params: Translate = [
      {
        Text: translateText,
      },
    ];
    console.log(params);
    try {
      const { data } = await apiPost.post<DetectedInitialState>(
        `${environment.rapidApi}/Detect?${environment.api_Version}`,
        params,
      );
      dispatch({
        type: EDetectedActionType.DETECTED_SUCCESS,
        payload: data,
      });
    } catch (error: unknown) {
      // TODO notification
    }
  };
};

export { setDetected };
