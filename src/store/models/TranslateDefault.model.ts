import { TranslateInitialDefault } from "../types";

export enum ETranslateActionTypeDefault {
  TRANSLATE_WORD_DEFAULT = "TRANSLATE-WORD-DEFAULT",
}

export interface ITranslateDefault {
  type: ETranslateActionTypeDefault.TRANSLATE_WORD_DEFAULT;
  payload: TranslateInitialDefault;
}

export type TTranslateDefaultType = ITranslateDefault;
