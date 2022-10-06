import { ENotificationActionType, TNotificationType } from '../models';

import { NotificationInitialState } from '../types';

export const FEATURE_KEY = 'notification';

export type NotificationState = NotificationInitialState;

const initialState: NotificationState = [];

export const reducer = (
  state: NotificationState = initialState,
  action: TNotificationType,
): NotificationState => {
  switch (action.type) {
    case ENotificationActionType.NEW_NOTIFICATION:
      return [
        ...state,
        {
          id: action.payload.id,
          message: action.payload.message,
          status: action.payload.status,
        },
      ];
    case ENotificationActionType.CLEAR_NOTIFICATION:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
