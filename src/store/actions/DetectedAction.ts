import { apiPost } from 'src/api/axios';
import { ThunkAction } from 'redux-thunk';

import { environment } from 'src/environments/environment';

import { RootState } from '../reducers';
import { FEATURE_KEY } from '../reducers/TranslateReducer';

import { Translate } from 'src/shared/interfaces';
import { TranslateInitialState } from '../types';
import { ETranslateActionType, TTranslateType } from '../models';

const setDetected = (
  translateText: string,
): ThunkAction<void, RootState, unknown, TTranslateType> => {
  return async (dispatch, getState) => {

    const params: Translate = [
      {
        Text: translateText,
      },
    ];

    try {
      const { data } = await apiPost.post<TranslateInitialState>(
        `${environment.rapidApi}/Detect?${environment.api_Version}`,
        params,
      );
      const newData = {
        ...getState()[FEATURE_KEY].itemsDetected,
        ...data,
      };
      dispatch({
        type: ETranslateActionType.DETECTED_SUCCESS,
        payload: newData,
      });
    } catch (error: unknown) {
      // TODO notification
    }
  };
};

export { setDetected };
