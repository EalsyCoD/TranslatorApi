import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { DispatchLoaderType, RootState } from "../types";

const setLoader = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: DispatchLoaderType) => {
    dispatch({
      type: "NEW-LOADER",
      payload: {
        status: true,
      },
    });
  };
};

const deleteLoader = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: DispatchLoaderType) => {
    dispatch({
      type: "CLEAR-LOADER",
      payload: {
        status: false,
      },
    });
  };
};

export { setLoader, deleteLoader };
