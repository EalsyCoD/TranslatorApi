import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { RootState } from "../types";

const setFavorites = (
  from: string,
  to: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    localStorage.setItem("token", from);
    dispatch({
      type: "NEW-FAVORITES",
      payload: {
        from,
        to,
      },
    });
  };
};

export { setFavorites };
