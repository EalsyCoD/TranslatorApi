/* eslint-disable no-unsafe-optional-chaining */
import { apiPost } from 'src/api/axios';
import { ThunkAction } from 'redux-thunk';

import { environment } from 'src/environments/environment';

import { RootState } from '../reducers';
import { Translate, TranslateDefaultInitialState } from '../types';
import { deleteLoader, setLoader } from './LoaderAction';

import { ETranslateActionTypeDefault, TTranslateDefaultType } from '../models';

const setTranslateDefault = (
  translateText: Translate,
): ThunkAction<void, RootState, unknown, TTranslateDefaultType> => {
  return async (dispatch, getState) => {
    try {
      const { language } = getState().detected?.[0];
      const { languageTo } = getState().language;

      dispatch(setLoader());
      const { data } = await apiPost.post<TranslateDefaultInitialState>(
        `${environment.rapidApi}/translate?${environment.api_Version}&from=${language}&to=${languageTo}`,
        translateText,
      );
      dispatch({
        type: ETranslateActionTypeDefault.TRANSLATE_WORD_DEFAULT,
        payload: data,
      });
      dispatch(deleteLoader());
    } catch (error: unknown) {
      dispatch(deleteLoader());
    }
  };
};
export { setTranslateDefault };
