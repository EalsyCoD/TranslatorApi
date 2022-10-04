import {
  ETranslateActionTypeDefault,
  TTranslateDefaultType,
} from "../models/TranslateDefault.model";

import { TranslateDefaultWord } from "../types";

const initialState: TranslateDefaultWord = [
  {
    translations: [
      {
        text: "",
        to: "",
      },
    ],
  },
];

export const TranslateDefaultReducer = (
  state: TranslateDefaultWord = initialState,
  action: TTranslateDefaultType
): TranslateDefaultWord => {
  switch (action.type) {
    case ETranslateActionTypeDefault.TRANSLATE_WORD_DEFAULT:
      return action.payload;
    default:
      return state;
  }
};
