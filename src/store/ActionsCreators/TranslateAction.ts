import { apiPost } from 'api/axios';
import { ThunkAction } from 'redux-thunk';

import { environment } from 'environments/environment';

import { Translate } from 'shared/interfaces';
import { RootState } from '../reducers';
import { FEATURE_KEY } from '../reducers/TranslateReducer';

import { TranslateInitialState } from '../types';

import { deleteLoader, setLoader } from './LoaderAction';

import { ETranslateActionType, TTranslateType } from '../models';

const setTranslate =
  (
    translateText: string,
  ): ThunkAction<void, RootState, unknown, TTranslateType> =>
  async (dispatch, getState) => {
    try {
      dispatch(setLoader())

      const params: Translate = [
        {
          Text: translateText,
        },
      ]
      const { data } = await apiPost.post<TranslateInitialState>(
        `${environment.rapidApi}/translate?${environment.api_Version}&to=${
          getState().language.languageTo
        }`,
        params,
      )

      const newData = {
        ...getState()[FEATURE_KEY].itemsTranslate,
        ...data,
      }

      dispatch({
        type: ETranslateActionType.TRANSLATE_WORD,
        payload: newData,
      })
      dispatch(deleteLoader())
    } catch (err: unknown) {
      dispatch(deleteLoader())
    }
  }

export { setTranslate };
