import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { randomId } from "src/helper/randomId";

import {
  DispatchNotificationType,
  NotificationStatus,
  RootState,
} from "../types";

const setNotification = (
  message: string,
  status: NotificationStatus,
  time: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: DispatchNotificationType) => {
    const id = randomId();

    dispatch({
      type: "NEW-NOTIFICATION",
      payload: {
        id: id,
        message: message,
        status: status,
      },
    });
    setTimeout(
      () =>
        dispatch({
          type: "CLEAR-NOTIFICATION",
          payload: {
            id: id,
            message: "",
            status: status,
          },
        }),
      time * 1000
    );
  };
};

export { setNotification };
