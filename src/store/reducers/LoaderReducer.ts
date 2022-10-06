import { ELoaderActionType, TLoaderType } from '../models';

import { LoaderInitialState } from '../types';

export const FEATURE_KEY = 'loader';

export type LoaderState = LoaderInitialState;

const initialState: LoaderState = {
  status: false,
};

export const reducer = (
  state: LoaderInitialState = initialState,
  action: TLoaderType,
): LoaderInitialState => {
  switch (action.type) {
    case ELoaderActionType.NEW_LOADER:
      return {
        ...state,
        status: action.payload.status,
      };
    case ELoaderActionType.CLEAR_LOADER:
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
};
