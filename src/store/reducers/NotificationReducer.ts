import { NotificationInitialState, NotificationAction } from "../types";

const initialState: NotificationInitialState = [];

const notificationReducer = (
  state: NotificationInitialState = initialState,
  action: NotificationAction
): NotificationInitialState => {
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

export default notificationReducer;
