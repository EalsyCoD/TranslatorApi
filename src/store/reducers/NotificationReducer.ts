import { NotificationInitialState, NotificationAction } from "../types";

export const FEATURE_KEY = "notification";

export type NotificationState = NotificationInitialState;

const initialState: NotificationState = [];

export const reducer = (
  state: NotificationState = initialState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case "NEW-NOTIFICATION":
      return [
        ...state,
        {
          id: action.payload.id,
          message: action.payload.message,
          status: action.payload.status,
        },
      ];
    case "CLEAR-NOTIFICATION":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
