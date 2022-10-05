import { ThunkAction } from "redux-thunk";
import { ELoaderActionType, TLoaderType } from "../models/Loader.model";

import { RootState } from "../reducers";
import { DispatchLoaderType } from "../types";

const setLoader = (): ThunkAction<void, RootState, unknown, TLoaderType> => {
  return async (dispatch: DispatchLoaderType) => {
    dispatch({
      type: ELoaderActionType.NEW_LOADER,
      payload: {
        status: true,
      },
    });
  };
};

const deleteLoader = (): ThunkAction<void, RootState, unknown, TLoaderType> => {
  return async (dispatch: DispatchLoaderType) => {
    dispatch({
      type: ELoaderActionType.CLEAR_LOADER,
      payload: {
        status: false,
      },
    });
  };
};

export { setLoader, deleteLoader };
