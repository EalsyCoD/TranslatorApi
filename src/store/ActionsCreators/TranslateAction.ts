import { apiPost } from 'api/axios';
import { ThunkAction } from 'redux-thunk';

import { environment } from 'environments/environment';

import { RootState } from '../reducers';
import { FEATURE_KEY } from '../reducers/TranslateReducer';

import { Translate } from 'shared/interfaces';
import { TranslateInitialState } from '../types';

import { deleteLoader, setLoader } from './LoaderAction';

import { ETranslateActionType, TTranslateType } from '../models';

const setTranslate = (
  translateText: string,
): ThunkAction<void, RootState, unknown, TTranslateType> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoader());

      const params: Translate = [
        {
          Text: translateText,
        },
      ];
      console.log('TRANSLATE');
      const { data } = await apiPost.post<TranslateInitialState>(
        `${environment.rapidApi}/translate?${environment.api_Version}&to=${
          getState().language.languageTo
        }`,
        params,
      );

      const newData = {
        ...getState()[FEATURE_KEY].itemsTranslate,
        ...data,
      };

      dispatch({
        type: ETranslateActionType.TRANSLATE_WORD,
        payload: newData,
      });
      dispatch(deleteLoader());
    } catch (err: unknown) {
      dispatch(deleteLoader());
    }
  };
};

export { setTranslate };
