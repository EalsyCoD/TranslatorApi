import { TRANSLATE_STATE_PLACEHOLDER } from "src/shared/constants/placeholders";

import { ETranslateActionType, TTranslateType } from "../models";

import { TranslateInitialState } from "../types";

export const FEATURE_KEY = "translate";

export type Translate = TranslateInitialState;

const initialState: TranslateInitialState = TRANSLATE_STATE_PLACEHOLDER;

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
