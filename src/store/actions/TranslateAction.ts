import { apiPost } from 'src/api/axios';
import { ThunkAction } from 'redux-thunk';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { environment } from 'src/environments/environment';

import { RootState } from '../reducers';
import { FEATURE_KEY } from '../reducers/TranslateReducer';

import { Translate } from 'src/shared/interfaces';
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
      const error = err as Error | AxiosError;
      if (axios.isAxiosError(error)) {
        toast.error('Error translate word refresh page!');
      }
      dispatch(deleteLoader());
    }
  };
};

export { setTranslate };
