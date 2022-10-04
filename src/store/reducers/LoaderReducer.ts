import { LoaderAction, LoaderState } from "../types";

const initialState: LoaderState = {
  status: false,
};

const LoaderReducer = (
  state: LoaderState = initialState,
  action: LoaderAction
): LoaderState => {
  switch (action.type) {
    case "NEW-LOADER":
      return {
        status: action.payload.status,
      };
    case "CLEAR-LOADER":
      return {
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default LoaderReducer;
