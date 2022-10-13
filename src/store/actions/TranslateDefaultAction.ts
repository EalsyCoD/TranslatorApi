import { apiPost } from 'src/api/axios';
import { ThunkAction } from 'redux-thunk';

import { environment } from 'src/environments/environment';

import { deleteLoader, setLoader } from './LoaderAction';

import { RootState } from '../reducers';
import { FEATURE_KEY } from '../reducers/TranslateReducer';

import { TranslateInitialState } from '../types';
import { Translate } from 'src/shared/interfaces';
import { ETranslateActionType, TTranslateType } from '../models';

const setTranslateDefault = (
  translateText: string,
): ThunkAction<void, RootState, unknown, TTranslateType> => {
  return async (dispatch, getState) => {
    try {
      const { languageTo } = getState().language;
      const { language } = getState().translate.itemsDetected?.[0];

      const params: Translate = [
        {
          Text: translateText,
        },
      ];
      dispatch(setLoader());
      const { data } = await apiPost.post<TranslateInitialState>(
        `${environment.rapidApi}/translate?${environment.api_Version}&from=${language}&to=${languageTo}`,
        params,
      );

      const newData = {
        ...getState()[FEATURE_KEY].itemsTranslateDefault,
        ...data,
      };
      console.log(newData);
      dispatch({
        type: ETranslateActionType.TRANSLATE_DEFAULT_WORD,
        payload: newData,
      });
      console.log(data);
      dispatch(deleteLoader());
    } catch (error: unknown) {
      dispatch(deleteLoader());
    }
  };
};
export { setTranslateDefault };
