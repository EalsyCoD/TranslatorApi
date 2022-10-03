import {
  ETranslateActionType,
  TTranslateType,
} from "../models/Translate.model";

import { TranslateState } from "../types";

const initialState: TranslateState = {
  translate: [],
};

export const TranslateReducer = (
  state: TranslateState = initialState,
  action: TTranslateType
): TranslateState => {
  switch (action.type) {
    case ETranslateActionType.TRANSLATE_WORD:
      return {
        translate: action.payload.translate,
      };
    default:
      return state;
  }
};
