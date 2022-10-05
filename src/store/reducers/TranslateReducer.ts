import {
  ETranslateActionType,
  TTranslateType,
} from "../models/Translate.model";

import { TranslateInitialState } from "../types";

export const FEATURE_KEY = "translate";

export type Translate = TranslateInitialState;

const initialState: Translate = [
  {
    detectedLanguage: {
      language: "",
      score: 0,
    },
    translations: [
      {
        text: "",
        to: "",
      },
    ],
  },
];

export const reducer = (
  state: Translate = initialState,
  action: TTranslateType
): Translate => {
  switch (action.type) {
    case ETranslateActionType.TRANSLATE_WORD:
      return action.payload;
    default:
      return state;
  }
};
