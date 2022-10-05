import {
  ETranslateActionTypeDefault,
  TTranslateDefaultType,
} from "../models/TranslateDefault.model";
import { TranslateDefault } from "../types";

export const FEATURE_KEY = "translateDefault";

export type DefaultTranslate = TranslateDefault;

const initialState: TranslateDefault = [
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
