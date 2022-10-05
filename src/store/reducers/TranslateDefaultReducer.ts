import {
  ETranslateActionTypeDefault,
  TTranslateDefaultType,
} from "../models/TranslateDefault.model";
import { TranslateInitialDefault } from "../types";

export const FEATURE_KEY = "translateDefault";

export type DefaultTranslate = TranslateInitialDefault;

const initialState: TranslateInitialDefault = [
  {
    translations: [
      {
        text: "",
        to: "",
      },
    ],
  },
];

export const reducer = (
  state: DefaultTranslate = initialState,
  action: TTranslateDefaultType
): DefaultTranslate => {
  switch (action.type) {
    case ETranslateActionTypeDefault.TRANSLATE_WORD_DEFAULT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
