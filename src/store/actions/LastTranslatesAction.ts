import { ThunkAction } from 'redux-thunk';

import { Cache } from 'src/shared/namespaces/cache.namespace';

import { RootState } from '../reducers';
import { FEATURE_KEY } from '../reducers/LastTranslatesReducer';

import { LastTranslatesInitialState } from '../types';

import {
  ELastTranslatesActionType,
  TTranslatesLastType,
} from '../models/LastTranslates.model';
import { IFavorites } from 'src/shared/interfaces';

const token = 'lastTranslatesCacheKey';

const setLastTranslates = (
  Data: IFavorites,
): ThunkAction<void, RootState, unknown, TTranslatesLastType> => {
  return async (dispatch, getState) => {

    const params: IFavorites = {
      from: Data.from,
      to: Data.to,
    };

    const newFavorites = [
      ...getState()[FEATURE_KEY].lastTranslates,
      params,
    ];
    dispatch({
      type: ELastTranslatesActionType.SET_TRANSLATES_SUCCESS,
      payload: newFavorites,
    });
    Cache.setValueToStorage(token, newFavorites);
  };
};
const getLatestTranslates = (): ThunkAction<
  void,
  RootState,
  unknown,
  TTranslatesLastType
> => {
  const dict =
    Cache.getDictItems<LastTranslatesInitialState['lastTranslates']>(token);

  return async (dispatch) => {
    dispatch({
      type: ELastTranslatesActionType.GET_TRANSLATES,
      payload: dict,
    });
  };
};

export { setLastTranslates, getLatestTranslates };
