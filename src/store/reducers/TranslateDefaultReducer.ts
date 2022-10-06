import { TRANSLATEDEFAULT_STATE_PLACEHLODER } from "src/shared/constants/placeholders";

import { ETranslateActionTypeDefault, TTranslateDefaultType } from "../models";

import { TranslateDefaultInitialState } from "../types";

export const FEATURE_KEY = "translateDefault";

export type DefaultTranslate = TranslateDefaultInitialState;

const initialState: TranslateDefaultInitialState =
  TRANSLATEDEFAULT_STATE_PLACEHLODER;

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
