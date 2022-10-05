import { ELoaderActionType, TLoaderType } from "../models/Loader.model";
import { LoaderState } from "../types";

export const FEATURE_KEY = "loader";

export type Loader = LoaderState;

const initialState: Loader = {
  status: false,
};

export const reducer = (
  state: Loader = initialState,
  action: TLoaderType
): Loader => {
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
