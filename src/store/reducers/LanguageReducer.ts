import { LanguagesAction, LanguagesState } from "../types";

const initialState: LanguagesState = {
  translation: [],
};

const ReposReducer = (
  state: LanguagesState = initialState,
  action: LanguagesAction
): LanguagesState => {
  switch (action.type) {
    case "ALL-LANGUAGES":
      return action.payload;

    default:
      return state;
  }
};

export default ReposReducer;
