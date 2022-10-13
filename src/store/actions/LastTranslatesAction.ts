import { ThunkAction } from 'redux-thunk';

import { Cache } from 'src/shared/namespaces';

import { RootState } from '../reducers';
import { FEATURE_KEY } from '../reducers/TranslateReducer';

import { IFavorites } from 'src/shared/interfaces';
import { ETranslateActionType, TTranslateType } from '../models';
import { TranslateInitialState } from '../types';

const token = 'lastTranslatesCacheKey';

const setLastTranslates = (
  Data: IFavorites,
): ThunkAction<void, RootState, unknown, TTranslateType> => {
  return async (dispatch, getState) => {

    const params: IFavorites = {
      from: Data.from,
      to: Data.to,
    };

    const newFavorites: IFavorites[] = [
      ...getState()[FEATURE_KEY].lastTranslates,
      params,
    ];
    dispatch({
      type: ETranslateActionType.SET_TRANSLATES_SUCCESS,
      payload: newFavorites,
    });
    Cache.setValueToStorage(token, newFavorites);
  };
};
const getLatestTranslates = (): ThunkAction<
  void,
  RootState,
  unknown,
  TTranslateType
> => {

  const dict =
    Cache.getDictItems<TranslateInitialState['lastTranslates']>(token);

  return async (dispatch) => {
    dispatch({
      type: ETranslateActionType.GET_TRANSLATES,
      payload: dict,
    });
  };
};

export { setLastTranslates, getLatestTranslates };
