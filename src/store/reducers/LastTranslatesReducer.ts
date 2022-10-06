import {
  ELastTranslatesActionType,
  TTranslatesLastType,
} from '../models/LastTranslates.model';

import { LastTranslatesInitialState } from '../types';

export const FEATURE_KEY = 'lastTranslates';

export type LastTranslates = LastTranslatesInitialState;

const initialState: LastTranslates = {
  lastTranslates: [],
};

export const reducer = (
  state: LastTranslatesInitialState = initialState,
  action: TTranslatesLastType,
): LastTranslatesInitialState => {
  switch (action.type) {
    case ELastTranslatesActionType.SET_TRANSLATES_SUCCESS:
      return {
        ...state,
        lastTranslates: action.payload,
      };
    case ELastTranslatesActionType.GET_TRANSLATES:
      return {
        ...state,
        lastTranslates: action.payload,
      };
    default:
      return state;
  }
};
