import { ThunkAction } from "redux-thunk";

import { randomId } from "src/helper/randomId";

import {
  DispatchNotificationType,
  NotificationStatus,
} from "src/shared/interfaces/Notification.interface";

import { ENotificationActionType, TNotificationType } from "../models";

import { RootState } from "../reducers";

const setNotification = (
  message: string,
  status: NotificationStatus,
  time: number
): ThunkAction<void, RootState, unknown, TNotificationType> => {
  return async (dispatch: DispatchNotificationType) => {
    const id = randomId();

    dispatch({
      type: ENotificationActionType.NEW_NOTIFICATION,
      payload: {
        id: id,
        message: message,
        status: status,
      },
    });
    setTimeout(
      () =>
        dispatch({
          type: ENotificationActionType.CLEAR_NOTIFICATION,
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
