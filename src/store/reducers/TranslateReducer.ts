import { TranslateAction, TranslateState } from "../types";

const initialState: TranslateState = {
  translate: [],
};

export const TranslateReducer = (
  state: TranslateState = initialState,
  action: TranslateAction
): TranslateState => {
  switch (action.type) {
    case "NEW-TRANSLATE":
      return {
        translate: action.payload.translate,
      };
    default:
      return state;
  }
};
