import {
  ETranslateActionType,
  TTranslateType,
} from "../models/Translate.model";

import { TranslateState } from "../types";

const initialState: TranslateState = [
  {
    detectedLanguage: {
      language: "",
      score: 1.0,
    },
    translations: [
      {
        text: "",
        to: "",
      },
    ],
  },
];

export const TranslateReducer = (
  state: TranslateState = initialState,
  action: TTranslateType
): TranslateState => {
  switch (action.type) {
    case ETranslateActionType.TRANSLATE_WORD:
      return action.payload;
    default:
      return state;
  }
};
